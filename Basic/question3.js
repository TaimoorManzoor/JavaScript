// 3. Write a JavaScript program to get the current date.  
// Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let dates=new Date();

console.log(`${dates.getMonth()}-${dates.getDate()}-${dates.getFullYear()}`);
console.log(`${dates.getMonth()}/${dates.getDate()}/${dates.getFullYear()}`);
