// 🌷 Music Control
const bgm = document.getElementById("bgmusic");
const btn = document.getElementById("playbtn");

btn.addEventListener("click", () => {
  if (bgm.paused) {
    bgm.play();
    btn.textContent = "⏸ Pause Music";
  } else {
    bgm.pause();
    btn.textContent = "▶ Play Music";
  }
});

// 🌸 Clock
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();