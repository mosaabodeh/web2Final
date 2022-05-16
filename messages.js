const moment = require('moment');

function formatMessage(username, text) {
    return {
        username,
        text,
        //give the format and time to the message
        time: moment().format('h:mm a')
    };
}

module.exports = formatMessage;