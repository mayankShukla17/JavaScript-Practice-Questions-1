// a)  Find the name of the month.
// b)  Find the day.
// c)  Find the day on the same date next year.

// >Example:-  
// >input:- 22/4/2017  
// >Output:- April


// a)  Find the name of the month.
function findMonth(date) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[new Date(date).getMonth()];
};

// b)  Find the day.
function findDay(date) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date(date).getDay()];
}

// c)  Find the day on the same date next year.
function findDayNextYear(date) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date(new Date(date).setFullYear(new Date(date).getFullYear()+1)).getDay()];
}


// Test Cases
console.log("Name of the Month of the given Date: ", findMonth("4/22/2017"));
console.log("Day of the given Date: ", findDay("4/22/2017"));
console.log("Day of the given Date Next Year: ",findDayNextYear("4/22/2017"));

