const car = document.querySelector(".car");
const gameArea = document.querySelector(".game-area");

let carX = gameArea.offsetWidth / 2 - car.offsetWidth / 2;
let carY = gameArea.offsetHeight - car.offsetHeight;

const speed = 55;

function updateCarPosition() {
  car.style.left = `${carX}px`;
  car.style.top = `${carY}px`;
}

function changeCarStyle(backgroundImage, width, height, rotation = 0) {
  car.style.backgroundImage = `url(${backgroundImage})`;
  car.style.width = width;
  car.style.height = height;
//   car.style.transform = `rotate(${rotation}deg)`;
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "W":
    case "w":
      if (carY > 0) carY -= speed;
      changeCarStyle("Images/car8.png", "82px", "95px");
      break;

    case "S":
    case "s":
      if (carY < gameArea.offsetHeight - car.offsetHeight) carY += speed;
      changeCarStyle("Images/car16.png", "84px", "93px");
      break;

    case "A":
    case "a":
      if (carX > 0) carX -= speed;
      changeCarStyle("Images/car12.png", "200px", "80px");
      break;

    case "D":
    case "d":
      if (carX < gameArea.offsetWidth - car.offsetWidth) carX += speed;
      changeCarStyle("Images/car4.png", "199px", "80px");
      break;

    case "E":
    case "e":
      if (carX < gameArea.offsetWidth - car.offsetWidth && carY > 0) {
        carX += speed / Math.sqrt(2);
        carY -= speed / Math.sqrt(2);
      }
      changeCarStyle("Images/car7.png", "145px", "95px");
      break;

    case "Q":
    case "q":
      if (carX < gameArea.offsetWidth - car.offsetWidth && carY > 0) {
        carX -= speed / Math.sqrt(2);
        carY -= speed / Math.sqrt(2);
      }
      changeCarStyle("Images/car10.png", "177px", "88px");
      break;

    case "C":
    case "c":
      if (carX < gameArea.offsetWidth - car.offsetWidth && carY > 0) {
        carX += speed / Math.sqrt(2);
        carY += speed / Math.sqrt(2);
      }
      changeCarStyle("Images/car2.png", "182px", "92px",);
      break;

    case "Z":
    case "z":
      if (carX < gameArea.offsetWidth - car.offsetWidth && carY > 0) {
        carX -= speed / Math.sqrt(2);
        carY += speed / Math.sqrt(2);
      }
      changeCarStyle("Images/car15.png", "145px", "94px");
      break;
  }
  updateCarPosition();
});

updateCarPosition();
