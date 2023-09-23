// FitBit API imports
import { HeartRateSensor } from "heart-rate";
import document from "document";
import clock from "clock";

// Imports from index.view
const clockLabel = document.getElementById("clock-label");
const myImageElement = document.getElementById("hmd");
const bpmValueElement = document.getElementById("bpmValue");
const bpmTextElement = document.getElementById("bpmText");
const dateLabel = document.getElementById("dateLabel");
const dayLabel = document.getElementById("dayLabel");

// Settings
const hrm = new HeartRateSensor();
myImageElement.href = "hmd.png";
clock.granularity = "seconds"; 

// app
clock.addEventListener("tick", (evt) => {
  const date = new Date(evt.date);
  const offsetMinutes = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes() - offsetMinutes);
  clockLabel.text = date.toTimeString().slice(0, 8);
});

hrm.addEventListener("reading", () => {
  bpmValueElement.text = `${hrm.heartRate}`;
  bpmTextElement.text = "bpm";
});

function updateDate() {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth() + 1; // 
  const formattedMonth = month < 10 ? `0${month}` : month; 
  const dateString = `${day}/${formattedMonth}`;
  dateLabel.text = dateString;
}

function updateDay() {
  const days = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
  const now = new Date();
  const day = days[now.getDay()];
  dayLabel.text = day;
}

//functions calls
hrm.start();
updateDate();
updateDay();

setInterval(updateDate, 1000);
setInterval(updateDay, 1000);






