import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Segment } from 'semantic-ui-react';
import 'src/styles.css';
import {WHITE} from "src/constants/COLORS";
import * as testActions from '../actions/testAction';
import TotalPresentation from '../components/ShotPresentation';
import ShotsPresentation from '../components/ShotsPresentation';
import '../styles.css';

class StatisticCmp extends Component {
    constructor(){
        super();

    }

    componentDidMount(){
        this.props.testActions.loadData();
        this.props.testActions.loadTrainings();
    }

    render() {
        const {training, test, testActions} = this.props;
        return (
            <div>
                <Segment className="Top-Segment Main-Color Margin-0">
                    <TotalPresentation
                        chartData={{
                            ...test.chartData,
                            chartData: test.chartData && test.chartData.chartData && {
                                ...test.chartData.chartData,
                                centerConfig: {
                                    ...test.chartData.chartData.centerConfig,
                                    color: WHITE
                                }
                            }
                        }}
                        lineData={test.lineData}
                        isFetching={test.isFetching || !test.isLoaded}
                        tickColor={WHITE}
                    />
                </Segment>
                <Segment className="Margin-0">
                    <ShotsPresentation
                        {...training}
                        key="ShotsPresentation"
                        loadFullTrainingDataData={testActions.loadFullTrainingDataData}
                    />
                </Segment>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    test: state.statistic.testData,
    training: state.statistic.trainingData,
});


const mapDispatchToProps = dispatch => ({
    testActions: bindActionCreators(testActions, dispatch)
});

const Statistic = connect(mapStateToProps, mapDispatchToProps)(StatisticCmp);

export default Statistic;

