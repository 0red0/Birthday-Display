// Age in y,m,d
let content = document.querySelector("h1");
let mons = document.getElementById("months");
let dys = document.getElementById("days");

let pointer = new Date();
let birthday = new Date("feb 24 1997");
let age = Date.now() - birthday;
age = Math.trunc(age / 1000 / 60 / 60 / 24 / 365);

let days = pointer.getDate();
let months = pointer.getMonth() + 1;

content.innerText = age + "   YEARS";
mons.innerText = months + "   MONTHS";
dys.innerText = days + "   DAYS";

//Till next birthday
const timeNow = new Date();
let year = timeNow.getFullYear();

let dateOfBirth = new Date(`2-24-${year}`).getTime();
if (Date.now() > dateOfBirth) {
   year++;
}
dateOfBirth = new Date(`2-24-${year}`).getTime();

let seconds = 1000;
let minutes = seconds * 60;
let hours = minutes * 60;
let dayz = hours * 24;

function countdown() {
   const dateDiff = dateOfBirth - Date.now();
   let dayTxt = Math.floor(dateDiff / dayz);
   let hourTxt = Math.floor((dateDiff % dayz) / hours);
   let minuteTxt = Math.floor((dateDiff % hours) / minutes);
   let secondTxt = Math.floor((dateDiff % minutes) / seconds);

   document.querySelector(".day").innerText = dayTxt;
   document.querySelector(".hour").innerText =
      hourTxt < 10 ? `0${hourTxt}` : hourTxt;
   document.querySelector(".minute").innerText =
      minuteTxt < 10 ? `0${minuteTxt}` : minuteTxt;
   document.querySelector(".second").innerText =
      secondTxt < 10 ? `0${secondTxt}` : secondTxt;
}
setInterval(countdown, 1000);
