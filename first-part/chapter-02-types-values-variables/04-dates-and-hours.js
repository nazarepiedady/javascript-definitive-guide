var then = new Date(2010, 0, 1); // 2010/01/01 [YYYY, MM, DD]
var later = new Date(2010, 0, 1, 17, 10, 30); // 2010/01/01, 05:10:30 PM

var now = new Date(); // The current time and date
var elapsed = now - then; // subtract de date: interval in milliseconds
