import { FETCH_LINE_DATA, LINE_DATA_LOADED } from '../constants/ActionTypes';

const staticData = {
    title: 'Population In Massachusetts at 1919 and 2019',
    chartData:{
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
            {
                label:'Population',
                data:[
                    748060,
                    132045,
                    53060,
                    86519,
                    35162,
                    55072
                ],
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ]
            },
            {
                label:'Population',
                data:[
                    617594,
                    181045,
                    153060,
                    106519,
                    105162,
                    95072
                ]
            }
        ]
    }
};

export function loadData() {
    return function(dispatch){
        dispatch({ type: FETCH_LINE_DATA });
        return dispatch({ type: LINE_DATA_LOADED, data : staticData });
    }
}