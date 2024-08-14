// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let dates=new Date();

let days=['Monday','Tuesday','Wednesday','Thuesday','Friday','Saturday','Sunday'];

console.log(`Today Is : ${days[dates.getDay()-1]}`);

let postTime = 15 > 12 ? 'PM' : 'AM';

let hour=dates.getHours() > 12 ? dates.getHours()-12 : 12-dates.getHours();

console.log(`Current time is ${hour} ${postTime} : ${dates.getMinutes()} : ${dates.getSeconds()}`);

