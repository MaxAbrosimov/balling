import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {BLACK} from "src/constants/COLORS";

var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
    draw: function() {
        originalDoughnutDraw.apply(this, arguments);
        const chart = this.chart;
        const centerConfig = chart.config.data.centerConfig;
        if (centerConfig) {
            const width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;
            const fontStyle = centerConfig.fontStyle || 'Arial';
            const text = centerConfig.text;
            const color = centerConfig.color || BLACK;
            const fontSize = (height / 10).toFixed(0);
            ctx.font = fontSize + "px " + fontStyle;
            ctx.textBaseline = "middle";

            const textX = Math.round((width - ctx.measureText(text).width) / 2);
            const textY = height / 2;
            ctx.fillStyle = color;
            ctx.fillText(text, textX, textY);
        }
    }
});

const DoughnutChart = ({chartData, height, title, displayLegend, legendPosition = 'bottom'}) => (
    <Doughnut
        data={chartData}
        height={height}
        options={{
            rotation: 2.5,
            title:{
                display: !!title,
                text: title,
                fontSize: 25
            },
            cutoutPercentage: 80,
            legend:{
                display: displayLegend,
                position: legendPosition
            }
        }}
    />
);


export default DoughnutChart;