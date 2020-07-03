import React from 'react';
import DoughnutChart from "src/components/charts/DoughnutChart";
import '../styles.css'
import {Dimmer, Loader} from "semantic-ui-react";
import BarChart from "src/components/charts/BarChart";

const TrainingPresentation = ({key, height, chartData, barData, isFetching}) => (
    <div>
        <Dimmer active={isFetching}>
            <Loader active={isFetching}/>
        </Dimmer>
        {!isFetching && (
            <div className="Flex">
                <div className="Total-Doughnut">
                    <DoughnutChart {...chartData} height={height}/>
                </div>
                <div className="Width-Half">
                    <BarChart {...barData} height={35} key={key + 'Bar'}/>
                </div>
            </div>
        )}
    </div>
);

export default TrainingPresentation;