crashCymbal = document.getElementById("crash-cymbal");
highTom = document.getElementById("high-tom");
bassDrum = document.getElementById("bass-drum");
midTom = document.getElementById("mid-tom");
rideCymbal = document.getElementById("ride-cymbal");
lowTom = document.getElementById("low-tom");
snareDrum = document.getElementById("snare-drum");
hiHats = document.getElementById("hi-hats");

buttonArray = [
  crashCymbal,
  highTom,
  bassDrum,
  midTom,
  rideCymbal,
  lowTom,
  snareDrum,
  hiHats,
];

crashAudio = document.getElementById("crash-audio");
highAudio = document.getElementById("high-audio");
bassAudio = document.getElementById("bass-audio");
midAudio = document.getElementById("mid-audio");
rideAudio = document.getElementById("ride-audio");
lowAudio = document.getElementById("low-audio");
snareAudio = document.getElementById("snare-audio");
hiAudio = document.getElementById("hi-audio");

audioArray = [
  crashAudio,
  highAudio,
  bassAudio,
  midAudio,
  rideAudio,
  lowAudio,
  snareAudio,
  hiAudio,
];

for (let i = 0; i < buttonArray.length; i++) {
  buttonArray[i].addEventListener("click", (e) => {
    audioArray[i].play();
  });

  buttonArray[i].addEventListener("mouseenter", (e) => {
    audioArray[i].play();
  });
}
