var then = new Date(2010, 0, 1);              // 2010/01/01 [YYYY, MM, DD]
var later = new Date(2010, 0, 1, 17, 10, 30); // 2010/01/01, 05:10:30 PM

var now = new Date();     // The current time and date
var elapsed = now - then; // subtract de date: interval in milliseconds

var laterFullYear = later.getFullYear();    // 2010
var laterMonth = later.getMonth();          // 0 >> Janery
var laterDate = later.getDate();            // 1
var laterDay = later.getDay();              // 5
var laterHours = later.getHours();          // 17
var laterUTCHours = later.getUTCHours();    // Hours in UTC; depend on timezone
var laterDateString = later.toString();     //
var laterDateUTCString = later.toUTCString(); //
var laterLocaleDateString = later.toLocaleDateString();
var laterLocaleTimeString = later.toLocaleTimeString();
var laterISOString = later.toISOString();

[
  laterFullYear,
  laterMonth,
  laterDate,
  laterDay,
  laterHours,
  laterUTCHours,
  laterDateString,
  laterDateUTCString,
  laterLocaleDateString,
  laterLocaleTimeString,
  laterISOString
].forEach(function(item) {
  console.log(item);
});
