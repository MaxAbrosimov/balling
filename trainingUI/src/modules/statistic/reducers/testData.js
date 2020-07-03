import { convertChartData, convertLineData } from './common';
import {FETCH_TEST_DATA, TEST_DATA_LOADED} from '../constants/ActionTypes';

const initialState = {
    isFetching: false,
    isLoaded: false
};

export default function testReducer(state = initialState, action) {
    switch(action.type) {

        case FETCH_TEST_DATA:
            return {
                ...initialState,
                isFetching: true
            };

        case TEST_DATA_LOADED:
            return {
                ...state,
                lineData: convertLineData(action.data.time),
                chartData: convertChartData(action.data.total),
                isFetching: false,
                isLoaded: true
            };

        default:
            return state
    }
}