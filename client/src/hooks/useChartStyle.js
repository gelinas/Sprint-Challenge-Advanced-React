import { useState, useEffect } from 'react';

export const useChartStyle = () => {
    const [mode, setMode] = useState("bar");
    const barChart = document.getElementById("bar-chart");
    const lineChart = document.getElementById("line-chart");

    console.log(barChart, lineChart);

    useEffect(() => {
        if (mode === "bar") {
            barChart.classList.remove('hidden');
            lineChart.classList.add('hidden');
        } 
        if (mode === "line") {
            lineChart.classList.remove('hidden');
            barChart.classList.add('hidden');
        } 
    },[mode]);

    return [mode, setMode];
}