//                                                          Date

let myDate = new Date();
console.log(myDate);                        // It shows today's date in ISOS format
console.log(myDate.toString());             // It shows "day month date year time timezone"
console.log(myDate.toDateString());         // It shows "day month date year"
console.log(myDate.toISOString());          // It shows today's date in ISOS format in String format
console.log(myDate.toLocaleDateString());   // It shows "month/date/year"
console.log(myDate.toLocaleTimeString());   // It shows "Hours:Minutes:MiliSeconds AM/PM"
console.log(myDate.toLocaleString());       // It shows "month/date/year, time"
console.log(myDate.toLocaleString('default', {  // customisable date
    weekday: "long",
    hourCycle : "h24"
}));
// get (use to retrieve)
console.log(myDate.getTime()); // It shows ime in seconds
console.log(myDate.getDate());
console.log(myDate.getMonth());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());
// set (use to set)
myDate.setDate(23);
myDate.setMonth(1);
myDate.setFullYear(2026);
myDate.setHours(13);
myDate.setMinutes(19);
myDate.setSeconds(44)
console.log(myDate.toLocaleString());


let myCreatedDate = new Date(2025, 4, 21); // (YYYY, M, DD) (for month M, 0 = January to 11 = December)
console.log(myCreatedDate);
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myCreatedDate2 = new Date(2025, 5, 22, 13, 15, 19); // (YYYY, M, DD, Hours, Minutes, MiliSeconds)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2025-02-28"); // Date as string (here month starts from 1 to 12)
console.log(myCreatedDate3.toLocaleString());
let mCD3H = myCreatedDate3.setHours(14);
let mCD3M = myCreatedDate3.setMinutes(47);
let mCD3MS = myCreatedDate3.setMilliseconds(59);
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp/1000));
