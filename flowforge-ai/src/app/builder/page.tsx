"use client";

import React, { useCallback, useRef, useState, useEffect } from 'react';
import {
    ReactFlow,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    Connection,
    Edge,
    Node,
    ReactFlowProvider,
    useReactFlow
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Link from 'next/link';
import Sidebar from '@/components/builder/Sidebar';
import { nodeTypes } from '@/components/builder/CustomNodes';

// Unique ID generator for nodes
let id = 0;
const getId = () => `dndnode_${id++}`;

function BuilderFlow() {
    const reactFlowWrapper = useRef<HTMLDivElement>(null);
    const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
    const { screenToFlowPosition } = useReactFlow();

    const [workflowId, setWorkflowId] = useState<string | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    // Initial load - mock or fetch from API
    useEffect(() => {
        setNodes([{
            id: '1', type: 'triggerNode', position: { x: 250, y: 150 },
            data: { label: 'Stripe: New User', icon: 'payments', description: 'Triggered when a customer is created' }
        }]);
    }, [setNodes]);

    const onConnect = useCallback(
        (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    const onDragOver = useCallback((event: React.DragEvent) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event: React.DragEvent) => {
            event.preventDefault();

            const stringData = event.dataTransfer.getData('application/reactflow');
            if (!stringData) return;

            const { type, label, description, icon } = JSON.parse(stringData);

            if (!type) {
                return;
            }

            const position = screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
            });

            const newNode: Node = {
                id: getId(),
                type,
                position,
                data: { label, description, icon },
            };

            setNodes((nds) => nds.concat(newNode as any));
        },
        [screenToFlowPosition, setNodes]
    );

    const handleSave = async () => {
        setIsSaving(true);
        try {
            const method = workflowId ? 'PUT' : 'POST';
            const url = workflowId ? `/api/workflows/${workflowId}` : '/api/workflows';
            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: 'My FlowForge Automation', nodes, edges })
            });
            const data = await res.json();
            if (data._id) setWorkflowId(data._id);
            alert('Workflow saved successfully!');
        } catch (error) {
            console.error(error);
            alert('Error saving workflow');
        } finally {
            setIsSaving(false);
        }
    };

    const handleRun = async () => {
        if (!workflowId) {
            alert('Please save the workflow first!');
            return;
        }
        try {
            const res = await fetch(`/api/workflows/${workflowId}/run`, { method: 'POST' });
            if (res.ok) alert('Execution triggered!');
            else alert('Failed to execute');
        } catch (error) {
            alert('Error triggering run');
        }
    };

    return (
        <div className="flex-1 flex flex-col h-screen bg-background-dark">
            <nav className="flex items-center justify-between p-4 glass border-b border-white/5 shrink-0 z-20">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="text-slate-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </Link>
                    <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-400">Flow Builder</h1>
                </div>
                <div className="flex gap-2">
                    <button onClick={handleSave} disabled={isSaving} className="px-4 py-2 text-sm font-semibold text-slate-300 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10">
                        {isSaving ? 'Saving...' : 'Save Draft'}
                    </button>
                    <button onClick={handleRun} className="px-4 py-2 text-sm font-bold text-white bg-primary rounded-lg shadow-md hover:bg-primary/90 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">play_arrow</span> Run Flow
                    </button>
                </div>
            </nav>
            <div className="flex-1 w-full relative flex">
                <Sidebar />
                <div className="flex-1 h-full" ref={reactFlowWrapper}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        nodeTypes={nodeTypes}
                        fitView
                        className="bg-background-dark"
                    >
                        <Controls className="!bg-card-dark !border-white/10 !fill-white" />
                        <MiniMap className="!bg-card-dark !mask-image-none" maskColor="rgba(0,0,0,0.4)" nodeColor="#10b981" />
                        <Background gap={32} size={2} color="#10b98122" />
                    </ReactFlow>
                </div>
            </div>
        </div>
    );
}

export default function BuilderPageWrapper() {
    return (
        <ReactFlowProvider>
            <BuilderFlow />
        </ReactFlowProvider>
    );
}
