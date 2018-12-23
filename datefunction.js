const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wendesday', 'Thursday', 'Friday', 'Saterday'];
const months = ['January', 'February', 'March','April','May','June','July','August','September','October','November','December'];
const postFix = ['st', 'nd', 'rd', 'th']


function formatDate(dateStr) {
    // Input in the form of a Epoch time stamp, a date string or comma seperated time idication
    // Output in the form "Thursday, 18 May 1978"

    const   date = new Date(dateStr),
         options = { weekday: 'long', day: 'numeric', year: 'numeric', month: 'long' },
    formatedDate = date.toLocaleDateString('en-NZ', options),// I like the New Zeeland variant
           hours = date.getHours(),
         minutes = date.getMinutes() < 10? `0${date.getMinutes()}`: date.getMinutes();

    // For parsing on a webpage the colon needs to be replaced with the html entity
    // TODO: add the 'just now', 'half an hour ago', 'an hour ago', 'a few hours ago', 'earlier today' 
    //  0-20min, 20-50min, 50min-110min, check if it was the same day
    if(date.getDate() == new Date().getDate()){
        return `Today, ${hours}&#58;${minutes}`;
    } else if(date.getDate()+1 ===  new Date().getDate()) {
        return `Yesterday, ${hours}&#58;${minutes}`;
    } else if (date.getDate()+2 ===  new Date().getDate()) {
        return `Two days ago, ${hours}&#58;${minutes}`;
    }
    return formatedDate;
}

