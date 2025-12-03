let time = document.getElementById("time");
let timeFormat = document.getElementById("time-format");

let showTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours % 12;
    hours = hours ? hours : 12;

    hours = hours<10 ? `0${hours}` : hours;
    minutes = minutes<10 ? `0${minutes}` : minutes;
    seconds = seconds<10 ? `0${seconds}` : seconds;

    time.innerHTML = `${hours} : ${minutes} : ${seconds}`;

    timeFormat.innerHTML = hours>12 ? "AM" : "PM"
}

document.addEventListener("DOMContentLoaded", () => {
    setInterval(showTime, 1000);
})