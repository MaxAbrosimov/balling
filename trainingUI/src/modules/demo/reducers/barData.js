import { FETCH_BAR_DATA, BAR_DATA_LOADED } from '../constants/ActionTypes';

const initialState = {
    isFetching: false,
    isLoaded: false
};

export default function barReducer(state = initialState, action) {
    switch(action.type) {

        case FETCH_BAR_DATA:
            return {
                ...initialState,
                isFetching: true
            };

        case BAR_DATA_LOADED:
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