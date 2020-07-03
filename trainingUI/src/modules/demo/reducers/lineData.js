import { FETCH_LINE_DATA, LINE_DATA_LOADED } from '../constants/ActionTypes';

const initialState = {
    isFetching: false,
    isLoaded: false
};

export default function lineReducer(state = initialState, action) {
    switch(action.type) {

        case FETCH_LINE_DATA:
            return {
                ...initialState,
                isFetching: true
            };

        case LINE_DATA_LOADED:
            return {
                ...state,
                data: action.data,
                isFetching: false,
                isLoaded: true
            };

        default:
            return state
    }
}