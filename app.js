const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");
const title = document.querySelector(".title");

const countDate = new Date("Jan 01, 2024 00:00:00").getTime();

const count = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = countDate - now;

  const daysTime = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hoursTime = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minsTime = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const secsTime = Math.floor((timeLeft % (1000 * 60)) / 1000);

  days.textContent = daysTime;
  hours.textContent = hoursTime;
  mins.textContent = minsTime;
  secs.textContent = secsTime;

  if (timeLeft < 0) {
    days.textContent = "";
    hours.textContent = "";
    mins.textContent = "";
    secs.textContent = "";
    title.textContent = "ALREADY LAUNCHED!";
  }
}, 1000);
