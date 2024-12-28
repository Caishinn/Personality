var player = document.getElementById("player");
let playbtn = document.getElementById("playbtn");

var playpause = function () {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
};

playbtn.addEventListener("click", playpause);

player.onplay = function () {
  playbtn.classList.remove("bxs-music");
  playbtn.classList.add("bx-music");
};

player.onpause = function () {
  playbtn.classList.add("bxs-music");
  playbtn.classList.remove("bx-music");
};
