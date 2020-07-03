import {FETCH_PIE_DATA, PIE_DATA_LOADED } from '../constants/ActionTypes';

const initialState = {
    isFetching: false,
    isLoaded: false
};

export default function pieReducer(state = initialState, action) {
    switch(action.type) {

        case FETCH_PIE_DATA:
            return {
                ...initialState,
                isFetching: true
            };

        case PIE_DATA_LOADED:
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