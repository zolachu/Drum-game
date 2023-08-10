// Detecting button click

let buttons = document.getElementsByClassName("drum");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    makeSound(this.innerHTML);

    buttonAnimation(this.innerHTML);
  });
}

// Detecting keyboard down

document.addEventListener("keydown", (event) => {
  makeSound(event.key);
  buttonAnimation(event.key);
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

  let audio = new Audio(sound);
  audio.play();
};

let buttonAnimation = (currentKey) => {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
};
