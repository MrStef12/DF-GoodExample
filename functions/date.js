var moment = require('moment');

exports.formatTime = function(date) {
    const today = moment();
    const mdate = moment(date);
    const diffInDays = mdate.diff(today, 'days');

    if(diffInDays == 0) { 
        return 'today';
    } else if(diffInDays == 1) {
        return 'tomorrow';
    } else if(diffInDays < 7) {
        return mdate.format('[on] dddd');
    } else if(diffInDays < 14) {
        return mdate.format('[next] dddd');
    }
    return mdate.format('MMMM Mo');
}