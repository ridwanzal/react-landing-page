export function printYear() {
   let currentYear = new Date().getFullYear();
   console.log(currentYear);

   return currentYear;
}

export function printDate() {
   let date = new Date();
   let currentDate = date.getDay();
   let currentMonth = date.getMonth();
   let currentYear = date.getFullYear();
   let dateResult = currentDate + '-' + currentMonth + '-' + currentYear;

   return dateResult;
}

export function formatDollars(dollars) {
   dollars = (Math.round(dollars * 100) / 100).toFixed(2);
   dollars = dollars.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

   return dollars;
}