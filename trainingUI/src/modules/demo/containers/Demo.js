import React, { Component } from 'react';
import LineChart from 'src/components/charts/LineChart';
import PieChart from 'src/components/charts/PieChart';
import DoughnutChart from 'src/components/charts/DoughnutChart';
import BarChart from 'src/components/charts/BarChart';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pieActions from '../actions/pieAction';
import * as barActions from '../actions/barAction';
import * as lineActions from '../actions/lineAction';

class DemoCmp extends Component {

    componentWillMount(){
        this.props.pieActions.loadData();
        this.props.barActions.loadData();
        this.props.lineActions.loadData();
    }

    render() {
        const {line, bar, pie } = this.props;
        return (
            <div>
                <div style={{display: 'flex'}}>
                {
                    !line.isFetching && line.isLoaded &&
                    (<div style={{width: '50%'}}>
                        <LineChart {...line.data}/>
                    </div>)
                }
                {
                    !bar.isFetching && bar.isLoaded &&
                    (<div style={{width: '50%'}}>
                        <BarChart {...bar.data}/>
                    </div>)
                }
                </div>
                <div style={{display: 'flex'}}>
                {

                    !pie.isFetching && pie.isLoaded &&
                    (<div style={{width: '50%'}}>
                        <PieChart {...pie.data}/>
                    </div>)
                }
                {
                    !pie.isFetching && pie.isLoaded &&
                    (<div style={{width: '50%'}}>
                        <DoughnutChart {...pie.data}/>
                    </div>)
                }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    pie: state.demo.pieData,
    line: state.demo.lineData,
    bar: state.demo.barData,
});


const mapDispatchToProps = dispatch => ({
    pieActions: bindActionCreators(pieActions, dispatch),
    barActions: bindActionCreators(barActions, dispatch),
    lineActions: bindActionCreators(lineActions, dispatch)
});

const Demo = connect(mapStateToProps, mapDispatchToProps)(DemoCmp);

export default Demo;

