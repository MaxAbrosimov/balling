import {convertTimestampToDate} from "src/utils/timeUtils";
import {SUCCESS, SUCCESS_OPACITY, FAIL, FAIL_OPACITY, SNOW} from "src/constants/COLORS";

export const convertLineData = (data =[]) => {
    const success = [];
    const fail = [];
    const labels = [];
    data.forEach(t => {
        success.push(t.success);
        fail.push(t.fail);
        labels.push(convertTimestampToDate(t.timestamp));
    });
    return {
        chartData: {
            labels,
            datasets: [
                {
                    data: fail,
                    backgroundColor: FAIL_OPACITY,
                    borderColor: FAIL,
                },
                {
                    data: success,
                    backgroundColor: SUCCESS_OPACITY,
                    borderColor: SUCCESS,
                }
            ]
        },
    };
};

export const convertLineData2 = (data =[]) => {
    const success = [];
    const fail = [];
    const labels = [];
    data.forEach(t => {
        success.push(t.success);
        fail.push(t.fail);
        labels.push(t.trainingName);
    });
    return {
        chartData: {
            labels,
            datasets: [
                {
                    data: fail,
                    backgroundColor: FAIL_OPACITY,
                    borderColor: FAIL,
                },
                {
                    data: success,
                    backgroundColor: SUCCESS_OPACITY,
                    borderColor: SUCCESS,
                }
            ]
        },
    };
};

export const convertChartData = data => ({
    chartData: {
        labels: ['success', 'fail'],
        centerConfig: {
            text: data.total + ' Shots',
        },
        datasets: [
            {
                data: [ data.success, data.fail],
                backgroundColor: [SUCCESS, FAIL],
                hoverBackgroundColor: [SUCCESS, FAIL],
            }
        ]
    }
});

export const convertBarData = data => {
    const labels = data.map(t => t.trainingName);
    const scored = data.map(t => t.success);
    const fail = data.map(t => t.fail);
    return {
        chartData:{
            labels: labels,
            datasets:[
                {
                    data: fail,
                    backgroundColor: 'rgba(255, 99, 132, 0.6)'
                },
                {
                    data: scored,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)'
                }
            ]
        }
    }
};
