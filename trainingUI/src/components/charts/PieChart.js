import React from 'react';
import {Pie} from 'react-chartjs-2';

const PieChart = ({chartData, title, displayLegend, legendPosition = 'bottom'}) => (
    <Pie
        data={chartData}
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


export default PieChart;