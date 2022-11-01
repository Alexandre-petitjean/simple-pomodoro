document.addEventListener("DOMContentLoaded", function(event) {
    console.log('ok');


});


function startPomodoro() {
    console.log('Pomodoro started');
    const departMinutes = 25
    let temps = departMinutes * 60

    const timerElementMin = document.getElementById("timeMin")
    const timerElementSec = document.getElementById("timeSec")

    setInterval(() => {
        let minutes = parseInt(temps / 60, 10)
        let secondes = parseInt(temps % 60, 10)

        minutes = minutes < 10 ? "0" + minutes : minutes
        secondes = secondes < 10 ? "0" + secondes : secondes

        timerElementMin.style.setProperty('--value', minutes)
        timerElementSec.style.setProperty('--value', secondes)
        temps = temps <= 0 ? 0 : temps - 1
    }, 1000)
}