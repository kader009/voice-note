const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const restartButton = document.getElementById('restartButton');

playButton.addEventListener('click', () => {
  audioPlayer.play();
});

pauseButton.addEventListener('click', () => {
  audioPlayer.pause();
});

restartButton.addEventListener('click', () => {
  audioPlayer.currentTime = 0;
  audioPlayer.play();
});
