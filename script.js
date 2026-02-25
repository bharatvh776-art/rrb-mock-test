let time = 90 * 60; // 90 minutes

const timer = setInterval(() => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  document.getElementById("timer").innerText =
    `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  time--;

  if (time < 0) {
    clearInterval(timer);
    submitTest();
  }
}, 1000);

function submitTest() {
  let score = 0;

  for (let i = 1; i <= 100; i++) {
    let q = document.querySelector(`input[name="q${i}"]:checked`);
    if (q) score += Number(q.value);
  }

  localStorage.setItem("score", score);
  window.location.href = "result.html";
}
