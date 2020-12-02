const week = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
let day = prompt("Choose a day: ").toLowerCase();
if (day == "sunday") {
    console.log(week[0]);
    } else {
    console.log(week[week.indexOf(day) + 1]);
}
