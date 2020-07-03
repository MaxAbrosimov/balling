import {post, get} from 'axios';
import { FETCH_TRAINING_DATA,
    FETCH_TEST_DATA,
    FETCH_FULL_TRAINING_DATA,
    TRAINING_DATA_LOADED,
    TEST_DATA_LOADED,
    FULL_TRAINING_DATA_LOADED
} from '../constants/ActionTypes';

const statics = {
    total: {
        total: 320,
        success: 155,
        fail: 165
    },
    time: [
        {
            timestamp: 1546300800,
            success: 76,
            fail: 84
        },
        {
            timestamp: 1546387200,
            success: 79,
            fail: 81
        }
    ]
};

const trainingData = [
    {
        id: 1,
        timestamp: 1546300800,
    },
    {
        id: 2,
        timestamp: 1546300800,
    }
];

const trainingStatisticData = [
    {
        id: 1,
        timestamp: 1546300800,
        total: {
            total: 160,
            success: 76,
            fail: 84
        },
        time: [
            {
                trainingName: 'left 90',
                success: 12,
                fail: 18
            },
            {
                trainingName: 'left 45',
                success: 9,
                fail: 1
            },
            {
                trainingName: 'left 45 clean shot',
                success: 5,
                fail: 5
            },
            {
                trainingName: 'free throw',
                success: 15,
                fail: 25
            },
            {
                trainingName: 'right 45',
                success: 11,
                fail: 9
            },
            {
                trainingName: 'right 45 clean throw',
                success: 10,
                fail: 10
            },
            {
                trainingName: 'right 90',
                success: 14,
                fail: 16
            }
        ]
    },
    {
        id: 2,
        timestamp: 1546300800,
        total: {
            total: 160,
            success: 79,
            fail: 81
        },
        time: [
            {
                trainingName: 'left 90',
                success: 12,
                fail: 18
            },
            {
                trainingName: 'left 45',
                success: 8,
                fail: 2
            },
            {
                trainingName: 'left 45 clean shot',
                success: 4,
                fail: 6
            },
            {
                trainingName: 'free throw',
                success: 15,
                fail: 25
            },
            {
                trainingName: 'right 45',
                success: 11,
                fail: 9
            },
            {
                trainingName: 'right 45 clean throw',
                success: 10,
                fail: 10
            },
            {
                trainingName: 'right 90',
                success: 14,
                fail: 16
            }
        ]
    }
];

export function loadFullTrainingDataData(id) {
    return function(dispatch){
        dispatch({ type: FETCH_FULL_TRAINING_DATA, id });
        return dispatch({ type: FULL_TRAINING_DATA_LOADED, trainingData : trainingStatisticData.find(data => data.id === id) });
    }
}


export function loadTrainings() {
    return function(dispatch){
        dispatch({ type: FETCH_TRAINING_DATA });
        return dispatch({ type: TRAINING_DATA_LOADED, trainings : trainingData });
    }
}


export function loadData() {
    return function(dispatch){
        dispatch({ type: FETCH_TEST_DATA });
        return dispatch({ type: TEST_DATA_LOADED, data : statics });
    }
}