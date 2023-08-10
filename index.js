// Detecting button click

let buttons = document.getElementsByClassName("drum");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let sound = makeSound(this.innerHTML);
    let audio = new Audio(sound);
    audio.play();
  });
}

// Detecting keyboard down

document.addEventListener("keydown", (event) => {
  let sound = makeSound(event.key);
  let audio = new Audio(sound);
  audio.play();
});

let makeSound = (letter) => {
  let sound = "";
  switch (letter) {
    case "w":
      sound = "./sounds/crash.mp3";
      break;
    case "a":
      sound = "./sounds/kick-bass.mp3";
      break;
    case "s":
      sound = "./sounds/snare.mp3";
      break;
    case "d":
      sound = "./sounds/tom-1.mp3";
      break;
    case "j":
      sound = "./sounds/tom-2.mp3";
      break;
    case "k":
      sound = "./sounds/tom-3.mp3";
      break;
    case "l":
      sound = "./sounds/tom-4.mp3";
      break;
    default:
      console.log("invalid key");
  }
  return sound;
};
