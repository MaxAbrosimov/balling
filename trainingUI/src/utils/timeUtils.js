import moment from 'moment';

export const convertTimestampToDate = (timestamp) => {
    return moment.unix(timestamp).format('MMM Do YY');
};