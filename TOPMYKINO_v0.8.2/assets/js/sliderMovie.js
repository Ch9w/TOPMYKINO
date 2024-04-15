let movies = [
  {
    id: 1,
    srcfull: "beekeeper1.png",
    name: "BEEKEEPER",
    populars: 1,
    views: 1000000,
    rating: 7,
    src: "beekeeper.png",
  },
  {
    id: 2,
    srcfull: "maingeroi.jpg",
    name: "Главный герой",
    populars: 3,
    views: 2800000,
    rating: 8,
    src: "maingeroi(600-800).jpg",
  },
  {
    id: 3,
    srcfull: "angrybirds2moviefull.jpg",
    name: "Angry Birds 2",
    populars: 4,
    views: 4000000,
    rating: 7.4,
    src: "angrybirds2(3_4).png",
  },
  {
    id: 4,
    srcfull: "elki5fullhd.jpg",
    name: "Ёлки 5",
    populars: 6,
    views: 1500000,
    rating: 6,
    src: "elki5.png",
  },
  {
    id: 5,
    srcfull: "geminifull.jpg",
    name: "Гемини",
    populars: 5,
    views: 700000,
    rating: 3.2,
    src: "gemini.jpg",
  },
  {
    id: 6,
    srcfull: "sing2full.jpg",
    name: "Зверопой 2",
    populars: 7,
    views: 850000,
    rating: 8.3,
    src: "sing2.jpg",
  },
  {
    id: 7,
    srcfull: "ILegendfull.jpg",
    name: "Я Легенда",
    populars: 8,
    views: 950000,
    rating: 7.9,
    src: "IAmLegend.jpg",
  },
  {
    id: 8,
    srcfull: "kungfupanda4full.jpg",
    name: "Кунг Фу Панда 4",
    populars: 9,
    views: 2000000,
    rating: 6.7,
    src: "KyngFuPanda4(3_4).jpg",
  },
  {
    id: 9,
    srcfull: "barbiefull.jpg",
    name: "Барби",
    populars: 10,
    views: 7000000,
    rating: 6.6,
    src: "Barbie.jpg",
  },
  {
    id: 10,
    srcfull: "cheburashkafull.jpg",
    name: "Чебурашка",
    populars: 11,
    views: 5000000,
    rating: 7.3,
    src: "Cheburaska.jpg",
  },
];

const containerMass = 5;
const mouseMass = 10;

let imageHasLoaded = false;

let mouseX = 0;
let prevMouseX = 0;
let mouseXOnDown = null;
let isMouseDown = false;

let containerPosition = 0;
let mouseVelocity = 0;
let containerVelocity = 0;

let imagesElement = null;

const createBeltScroller = (container, images) => {
  imageHasLoaded = true;
  const beltDOMItems = images.map((image, index) => {
    const element = document.createElement("div");
    element.style.position = "relative";
    element.classList.add("item");
    const elementImage = document.createElement("img");
    elementImage.style.height = "100%";
    for (let i = 0; i < movies.length; i++) {
      if (image == movies[i].name) {
        elementImage.src = `./assets/img/${movies[i].srcfull}`;
        element.appendChild(elementImage);
        const elementScore = document.createElement("span");
        elementScore.style.position = "absolute";
        elementScore.style.top = 0;
        elementScore.style.right = 0;
        elementScore.style.padding = "0 1%";
        elementScore.style.margin = "1%";
        elementScore.style.borderRadius = "3px";
        if (image == movies[i].name) {
          elementScore.innerHTML = movies[i].rating;
          if (movies[i].rating >= 6.66) {
            elementScore.style.background = "green";
          } else if (movies[i].rating >= 3.33) {
            elementScore.style.background = "orange";
          } else {
            elementScore.style.background = "red";
          }
        }
        element.appendChild(elementScore);
        const elementA = document.createElement("a");
        if (image == movies[i].name) {
          elementA.innerHTML = movies[i].name;
        }
        elementA.href = "./pages/thismovie.html";
        element.appendChild(elementA);
        return element;
      }
      if (image == "Больше Фильмов") {
        const elementA = document.createElement("a");
        elementA.classList.add('moreMovies')
        elementA.innerHTML = image;
        elementA.href = "./pages/movies.html";
        element.appendChild(elementA);
        element.style.textAlign = 'center'
        element.style.paddingTop = "1%"
        return element;
      }
    }
  });
  imagesElement = beltDOMItems.map((element) => element);
  beltDOMItems.forEach((beltDOMItem) => {
    container.appendChild(beltDOMItem);
  });
};
const container = document.querySelector(".sliderMovies");

createBeltScroller(container, [
  "BEEKEEPER",
  "Главный герой",
  "Angry Birds 2",
  "Ёлки 5",
  "Гемини",
  "Зверопой 2",
  "Я Легенда",
  "Кунг Фу Панда 4",
  "Барби",
  "Чебурашка",
  "Больше Фильмов"
]);

// Mouse event handlers
const onMouseUpdate = (event) => { mouseX = event.pageX; }; // Mouse movement
const onMouseDown = () => { isMouseDown = true; }; // Mouse button press
const onMouseUp = () => { isMouseDown = false; }; // Mouse button release

// Add mouse event listeners
document.addEventListener("pointermove", onMouseUpdate, false);
document.querySelector(".sliderMovies").addEventListener("pointerdown", onMouseDown);
document.addEventListener("pointerup", onMouseUp);
let TimeMouseVelocity
const calculateMouseMomentum = () => {
  if (isMouseDown) {
    if (mouseXOnDown == null) {
      mouseXOnDown = mouseX;
      containerVelocity = 0;
    }
    const distance = mouseX - mouseXOnDown;

    if (prevMouseX == 0) prevMouseX = mouseX
    mouseVelocity = mouseX - prevMouseX;
    // console.log(mouseVelocity + ' = ' + mouseX + ' + ' + prevMouseX)
  } else {
    if (mouseXOnDown != null) {
      containerVelocity =
        ((2 * mouseMass) / (mouseMass + containerMass)) * mouseVelocity +
        ((containerMass - mouseMass) / (mouseMass + containerMass)) *
        containerVelocity;

      const maxVelocity = 60;

      if (containerVelocity > maxVelocity) {
        containerVelocity = maxVelocity;
      } else if (containerVelocity < -maxVelocity) {
        containerVelocity = -maxVelocity;
      }

      mouseXOnDown = null;
      mouseVelocity = 0;
      mouseX = 0
      prevMouseX = 0

    }
  }

  prevMouseX = mouseX;
  mouseXSerials = mouseX
};

const updateContainer = () => {
  const boundRight = -container.offsetWidth + window.innerWidth - 85;

  const isOutBound =
    containerPosition > 0 || containerPosition < boundRight;

  if (!isMouseDown) {
    const mu = 0.04;
    const g = 10;
    const flictionForce = containerMass * g * mu;
    const flictionA = flictionForce / containerMass;

    if (containerVelocity > 0) {
      containerVelocity -= flictionA;
      if (containerVelocity < 0) {
        containerVelocity = 0;
      }
    } else if (containerVelocity < 0) {
      containerVelocity += flictionA;
      if (containerVelocity > 0) {
        containerVelocity = 0;
      }
    }

    if (isOutBound) {
      const k = 0.01;
      const restLength = containerPosition > 0 ? 0 : boundRight;
      const currentLength = containerPosition;
      const dragForce = 1 * k * (restLength - currentLength);

      const dragForceA = dragForce / containerMass;
      containerVelocity += dragForce;

      const nextPosition = containerPosition + containerVelocity;

      if (containerPosition < boundRight && nextPosition > boundRight) {
        containerVelocity = 0;
        containerPosition = boundRight;
      } else if (containerPosition > 0 && nextPosition < 0) {
        containerVelocity = 0;
        containerPosition = 0;
      }
    }
  }

  containerPosition = containerPosition + containerVelocity + (isOutBound ? mouseVelocity / 2 : mouseVelocity);
  container.style.transform = `translate(${containerPosition}px)`;
};

const loop = () => {
  calculateMouseMomentum();
  updateContainer();
  window.requestAnimationFrame(() => {
    loop();
  });
};

loop();
