const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wendesday', 'Thursday', 'Friday', 'Saterday'];
const months = ['January', 'February', 'March','April','May','June','July','August','September','October','November','December'];
const postFix = ['st', 'nd', 'rd', 'th']



// TODO: make the language changable, by adding a parame and refering to a language JSON
function formatDate(dateStr) {
    // Input in the form of a Epoch time stamp, a date string or comma seperated time idication
    // Output in the form "Thursday, 18 May 1978" is date is more than 48 hours ago, else a different 
    // time indication

    const   date = new Date(dateStr),
             now = new Date(),
         options = { weekday: 'long', day: 'numeric', year: 'numeric', month: 'long' },
    formatedDate = date.toLocaleDateString('en-NZ', options), // I like the New Zeeland variant
           hours = date.getHours(),
          totMin = hours * 60 + date.getMinutes(), // Total number of minutes until date string
       totNowMin = now.getHours()*60 + now.getMinutes(), // Total munber of minutes until now
         minutes = date.getMinutes() < 10? `0${date.getMinutes()}`: date.getMinutes();

    //Not pretty but a switch will not work
    if(date.getDate() == now.getDate() && (totNowMin - totMin) < 20) {
        console.log((totNowMin - totMin));
        return "Just now";
    } else if (date.getDate() == now.getDate() && (totNowMin - totMin) < 50) {
        console.log((totNowMin - totMin));
        return "About half an hour ago";
    } else if (date.getDate() == now.getDate() && (totNowMin - totMin) < 110) {
        console.log((totNowMin - totMin));
        return "About an hour ago";
    } else if (date.getDate() == now.getDate() && (totNowMin - totMin) < 150) {
        console.log((totNowMin - totMin));
        return "A few hours ago";
    } else if (date.getDate() == now.getDate() && (totNowMin - totMin) > 150) {
        console.log((totNowMin - totMin));
        return "Earlier today";
    } else if(date.getDate()+1 ===  now.getDate()) {
        return `Yesterday, ${hours}&#58;${minutes}`;
    } else if (date.getDate()+2 ===  now.getDate()) {
        return `Two days ago, ${hours}&#58;${minutes}`;
    }
    return formatedDate;
}