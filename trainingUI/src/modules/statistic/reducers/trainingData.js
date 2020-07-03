import {
    FETCH_TRAINING_DATA,
    FETCH_FULL_TRAINING_DATA,
    TRAINING_DATA_LOADED,
    FULL_TRAINING_DATA_LOADED
} from "../constants/ActionTypes";
import { convertChartData, convertLineData2, convertBarData } from './common';
import {convertTimestampToDate} from "src/utils/timeUtils";

const initialState = {
    isFetching: false,
    isLoaded: false,
    trainings: []
};

export default function trainingReducer(state = initialState, action) {
    switch(action.type) {

        case FETCH_TRAINING_DATA:
            return {
                ...initialState,
                isFetching: true
            };

        case TRAINING_DATA_LOADED:
            return {
                ...state,
                trainings: action.trainings.map(t => ({
                    ...t,
                    name: convertTimestampToDate(t.timestamp)
                })),
                isFetching: false,
                isLoaded: true
            };

        case FETCH_FULL_TRAINING_DATA:
            return {
                ...state,
                trainings: state.trainings.map(training => {
                    if (training.id === action.id) {
                        return {
                            ...training,
                            isFetching: true
                        }
                    } else {
                        return training;
                    }
                })
            };

        case FULL_TRAINING_DATA_LOADED:
            return {
                ...state,
                trainings: state.trainings.map(training => {
                    if (training.id === action.trainingData.id) {
                        return {
                            ...training,
                            isFetching: false,
                            isLoaded: true,
                            lineData: convertLineData2(action.trainingData.time),
                            chartData: convertChartData(action.trainingData.total),
                            barData: convertBarData(action.trainingData.time),
                        };
                    }
                    return {...training, isFetching: false};
                })
            };

        default:
            return state
    }
}