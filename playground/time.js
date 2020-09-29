var moment = require('moment');

var date = moment();
// date.add(1, 'year');
// date.subtract(9, 'months');
console.log(date.format('MMM Do YYYY'));

// var createdAt = 1234;
// var date = moment(createdAt);
console.log(date.format('HH:MM:a'));