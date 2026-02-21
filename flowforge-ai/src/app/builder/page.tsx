"use client";

import React, { useCallback } from 'react';
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
    Node
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Link from 'next/link';

const initialNodes: Node[] = [
    {
        id: '1',
        position: { x: 250, y: 50 },
        data: { label: 'Trigger: New User (Stripe)' },
        type: 'input',
        style: {
            background: 'rgba(12, 12, 14, 0.7)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderLeft: '4px solid #f97316',
            color: 'white',
            borderRadius: '0.75rem',
            padding: '16px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
    },
    {
        id: '2',
        position: { x: 100, y: 150 },
        data: { label: 'Action: Send Welcome Email' },
        style: {
            background: 'rgba(12, 12, 14, 0.7)',
            backdropFilter: 'blur(16px)',
            border: '2px solid #10b981',
            color: 'white',
            borderRadius: '0.75rem',
            padding: '16px',
            boxShadow: '0 0 0 4px rgba(16, 185, 129, 0.1)'
        }
    },
    {
        id: '3',
        position: { x: 400, y: 150 },
        data: { label: 'Action: Analyze Profile' },
        style: {
            background: 'rgba(12, 12, 14, 0.7)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderLeft: '4px solid #14b8a6',
            color: 'white',
            borderRadius: '0.75rem',
            padding: '16px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
    }
];
const initialEdges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e1-3', source: '1', target: '3', animated: true },
];

export default function Builder() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    return (
        <div className="flex flex-col h-screen bg-background-dark">
            <nav className="flex items-center justify-between p-4 glass border-b border-white/5 shrink-0">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="text-slate-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </Link>
                    <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-400">Flow Builder</h1>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 text-sm font-semibold text-slate-300 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10">Test Run</button>
                    <button className="px-4 py-2 text-sm font-bold text-white bg-primary rounded-lg shadow-md hover:bg-primary/90">Deploy AI Agent</button>
                </div>
            </nav>
            <div className="flex-1 w-full relative">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    fitView
                >
                    <Controls />
                    <MiniMap />
                    <Background gap={32} size={2} color="#10b98122" />
                </ReactFlow>
            </div>
        </div>
    );
}
