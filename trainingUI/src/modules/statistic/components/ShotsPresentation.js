import React, {Component} from 'react';
import '../styles.css'
import {Dimmer, List, Loader} from "semantic-ui-react";
import TrainingPresentation from './TrainingPresentation';
import '../styles.css';

class ShotsPresentation extends Component {
    constructor(){
        super();
        this.state = {
            opened: []
        }
    }

    onClickItem(endId) {
        let opened = this.state.opened;
        const itemClicked = opened.includes(endId);
        if (itemClicked) {
            opened = opened.filter(v => v !== endId);
        } else {
            opened.push(endId);
            this.props.loadFullTrainingDataData(endId);
        }
        this.setState({opened});
    }



    render() {
        const {trainings, isFetching, isLoaded, key} = this.props;
        const showComponent = !isFetching && isLoaded;
        return (
            <div>
                <Dimmer active={!showComponent}>
                    <Loader active={!showComponent}/>
                </Dimmer>
                {showComponent &&
                    (<List divided relaxed className="Margin-Auto">
                        {
                            trainings.map(t => {
                                return (
                                    <List.Item key={t.id}>
                                        <div onClick={() => this.onClickItem(t.id)}>
                                            {t.name}
                                        </div>
                                        {this.state.opened.includes(t.id) &&
                                            (<div className="Env-test-item">
                                                <TrainingPresentation
                                                    key={t.id + "presentation"}
                                                    chartData={t.chartData}
                                                    barData={t.barData}
                                                    isFetching={t.isFetching}
                                                    height={100}
                                                />
                                            </div>)
                                        }
                                    </List.Item>
                                )
                            })
                        }
                    </List>)
                }
            </div>
        );
    }
}



export default ShotsPresentation;