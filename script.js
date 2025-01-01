const audioPlayer = document.getElementById("audioPlayer");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const restartButton = document.getElementById("restartButton");
const songButtons = document.querySelectorAll(".songButton");

let currentSong = null;

songButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    const songSrc = event.target.getAttribute("data-src");
    audioPlayer.src = songSrc;
    currentSong = songSrc;
    audioPlayer.play();
    playButton.innerHTML = `<i class="fa fa-pause"></i> Pause`;
  });
});

playButton.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.innerHTML = `<i class="fa fa-pause"></i> Pause`;
  } else {
    audioPlayer.pause();
    playButton.innerHTML = `<i class="fa fa-play"></i> Play`;
  }
});

pauseButton.addEventListener("click", () => {
  audioPlayer.pause();
  playButton.innerHTML = `<i class="fa fa-play"></i> Play`;
});

restartButton.addEventListener("click", () => {
  audioPlayer.currentTime = 0;
  audioPlayer.play();
  playButton.innerHTML = `<i class="fa fa-pause"></i> Pause`;
});
