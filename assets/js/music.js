var mysong = document.getElementById("mysong");
var icon = document.getElementById("home__scroll");

icon.onclick = function () {
  if (mysong.paused) {
    mysong.play();
    icon.i = "images/pause.png";
  } else {
    mysong.pause();
    icon.src = "images/play.png";
  }
};
