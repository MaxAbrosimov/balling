import React from 'react';
import {Line} from 'react-chartjs-2';
import {SNOW} from "src/constants/COLORS";

const LineChart = ({ chartData, title, height, displayLegend, legendPosition = 'bottom', tickColor = SNOW}) => (
    <Line
        datasetKeyProvider={Math.random}
        data={chartData}
        height={height}
        options={{
            responsive: true,
            maintainAspectRatio: false,
            title:{
                display: !!title,
                text: title,
                fontSize: 25,
            },
            legend:{
                display: displayLegend,
                position: legendPosition
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: tickColor,
                        fontSize: 12,
                        beginAtZero: true
                    }
                }],
                xAxes: [
                    {
                        position: 'top',
                        ticks: {
                            fontColor: tickColor,
                            fontSize: 12,
                            beginAtZero: true
                        }
                    }
                ]
            }
        }}
    />
);

export default LineChart;