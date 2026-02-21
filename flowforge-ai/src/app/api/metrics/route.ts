import { NextResponse } from 'next/server';

export async function GET() {
    // Mock realtime analytics data reflecting DB logs
    const chartData = [
        { name: 'Mon', runs: 4000, success: 3800, errors: 200 },
        { name: 'Tue', runs: 3000, success: 2850, errors: 150 },
        { name: 'Wed', runs: 2000, success: 1980, errors: 20 },
        { name: 'Thu', runs: 2780, success: 2700, errors: 80 },
        { name: 'Fri', runs: 1890, success: 1800, errors: 90 },
        { name: 'Sat', runs: 2390, success: 2380, errors: 10 },
        { name: 'Sun', runs: 3490, success: 3400, errors: 90 },
    ];

    const systemMetrics = {
        activeAgents: 24,
        cpuLoad: "32%",
        memoryUsage: "4.2GB",
    };

    return NextResponse.json({ chartData, systemMetrics });
}
