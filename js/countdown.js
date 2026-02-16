
// Countdown Timer
const startCountdown = () => {
    // Set the date we're counting down to (3 days from now)
    // Per user request: "reset if he refresh" -> So always 3 days from *now*
    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 3);
    countDownDate.setHours(countDownDate.getHours() + 5);
    countDownDate.setMinutes(countDownDate.getMinutes() + 13);
    countDownDate.setSeconds(countDownDate.getSeconds() + 15);
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.innerText = days < 10 ? "0" + days : days;
        hoursEl.innerText = hours < 10 ? "0" + hours : hours;
        minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
        secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
    };

    setInterval(updateTimer, 1000);
    updateTimer(); // Run immediately
};

document.addEventListener('DOMContentLoaded', startCountdown);
