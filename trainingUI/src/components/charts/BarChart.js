import React from 'react';
import {Bar} from 'react-chartjs-2';

const BarChart = ({key, chartData, height, title, displayLegend, legendPosition = 'bottom'}) => (
    <Bar
        key={key}
        id={key}
        data={chartData}
        height={height}
        options={{
            title:{
                display: !!title,
                text: title,
                fontSize: 25
            },
            legend:{
                display: displayLegend,
                position: legendPosition
            }
        }}
    />
);

export default BarChart;