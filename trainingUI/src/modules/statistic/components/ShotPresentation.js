import React from 'react';
import DoughnutChart from "src/components/charts/DoughnutChart";
import LineChart from "src/components/charts/LineChart";
import '../styles.css'
import {Dimmer, Loader} from "semantic-ui-react";

const ShotPresentation = ({height, chartData, lineData, isFetching, tickColor}) => (
    <div style={{height: '100%'}}>
        <Dimmer active={isFetching}>
            <Loader active={isFetching}/>
        </Dimmer>
        {!isFetching && (
            <div className="Flex">
                <div className="Total-Doughnut">
                    <DoughnutChart {...chartData} height={height}/>
                </div>
                <div className="Width-Half">
                    <LineChart {...lineData} height={height} tickColor={tickColor}/>
                </div>
            </div>
        )}
    </div>
);

export default ShotPresentation;