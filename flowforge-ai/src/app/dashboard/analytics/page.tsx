"use client";

import { useState, useEffect } from 'react';
import { Activity, Clock, Zap, Target } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

export default function AnalyticsPage() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        // Simulated realtime data fetch
        const fetchMetrics = async () => {
            const res = await fetch('/api/metrics');
            if (res.ok) {
                const json = await res.json();
                setData(json.chartData);
            }
        };
        fetchMetrics();
    }, []);

    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-white">Advanced Analytics</h1>
                <p className="text-slate-400 mt-1">Deep dive into your workflow execution metrics and AI consumption.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                    { title: "Tokens Used", value: "1.2M", icon: <Target className="text-purple-500" /> },
                    { title: "Avg Duration", value: "412ms", icon: <Clock className="text-sky-500" /> },
                    { title: "Saved Hours", value: "842h", icon: <Zap className="text-yellow-500" /> },
                    { title: "Error Rate", value: "0.12%", icon: <Activity className="text-red-500" /> },
                ].map((stat, i) => (
                    <div key={i} className="glass p-6 rounded-2xl shadow-sm border border-white/5 hover:border-primary/30 hover:shadow-md transition-all group">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-semibold text-slate-400">{stat.title}</h3>
                            <div className="p-2 bg-background-dark/50 rounded-lg group-hover:bg-background-dark transition-colors">{stat.icon}</div>
                        </div>
                        <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="glass p-6 rounded-2xl border border-white/5 shadow-sm relative overflow-hidden h-[400px]">
                    <h2 className="text-xl font-bold mb-6 text-white">Task Execution Volume</h2>
                    {data.length > 0 ? (
                        <div className="w-full h-full -ml-4 pb-12">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorRuns" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#9513ec" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#9f1fef" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff1a" />
                                    <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 12 }} tickLine={false} axisLine={false} />
                                    <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} tickLine={false} axisLine={false} />
                                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontWeight: 'bold' }} />
                                    <Area type="monotone" dataKey="runs" stroke="#9f1fef" strokeWidth={3} fillOpacity={1} fill="url(#colorRuns)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    )}
                </div>

                <div className="glass p-6 rounded-2xl border border-white/5 shadow-sm relative overflow-hidden h-[400px]">
                    <h2 className="text-xl font-bold mb-6 text-white">AI Optimization Success</h2>
                    {data.length > 0 ? (
                        <div className="w-full h-full -ml-4 pb-12">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff1a" />
                                    <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 12 }} tickLine={false} axisLine={false} />
                                    <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} tickLine={false} axisLine={false} />
                                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontWeight: 'bold' }} />
                                    <Line type="stepAfter" dataKey="success" stroke="#10b981" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
