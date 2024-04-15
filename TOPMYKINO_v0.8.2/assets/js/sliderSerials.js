let serials = [
  { id: 11, srcfull: 'kitchenfull.jpg', name: 'Кухня', populars: 1, views: 10000000, rating: 8.6, src: 'kitchen.jpg' },
  { id: 12, srcfull: 'RickAndMortyFull.jpg', name: 'Рик и Морти', populars: 2, views: 12000000, rating: 9, src: 'RickAndMorty(3_4).jpg' },
  { id: 13, srcfull: "Boy'sWordFull.jpg", name: 'Слово пацана. Кровь на асфальте', populars: 3, views: 7000000, rating: 8.3, src: `Boy'sWord.jpg` },
  { id: 14, srcfull: 'GoodDoctorFull.jpg', name: 'Хороший доктор', populars: 4, views: 6000000, rating: 6.6, src: 'GoodDoctor.jpg' },
  { id: 15, srcfull: 'MandalorianFull.jpg', name: 'Мандалорец', populars: 5, views: 5000000, rating: 3.2, src: 'Mandalorian.jpg' },
  { id: 16, srcfull: 'LokiFull.jpg', name: 'Локи', populars: 6, views: 5500000, rating: 7.7, src: 'Loki.jpg' },
  { id: 17, srcfull: 'VampireFull.jpg', name: 'Вампиры средней полосы', populars: 7, views: 7000000, rating: 8.3, src: 'Vampire.jpg' },
  { id: 18, srcfull: 'NutritionUnitFull.jpg', name: 'Пищеблок', populars: 8, views: 7700000, rating: 7.4, src: 'NutritionUnit.jpg' },
  { id: 19, srcfull: 'GravityFallsFull.jpg', name: 'Гравити Фолз', populars: 9, views: 0, rating: 9.0, src: 'GravityFalls.jpg' },
  { id: 20, srcfull: 'ChernobylFull.jpg', name: 'Чернобыль', populars: 10, views: 0, rating: 8.8, src: 'Chernobyl.jpg' },]


const containerMassSerials = 5;
const mouseMassSerials = 10;

let imageHasLoadedSerials = false;

let mouseXSerials = 0;
let prevMouseXSerials = 0;
let mouseXOnDownSerials = null;
let isMouseDownSerials = false;

let containerPositionSerials = 0;
let mouseVelocitySerials = 0;
let containerVelocitySerials = 0;

let imagesElementSerials = null;

const createBeltScrollerSerials = (containerSerials, images) => {
  imageHasLoadedSerials = true;
  const beltDOMItems = images.map((image, index) => {
    const element = document.createElement("div");
    element.style.position = "relative";
    element.classList.add("item");
    const elementImage = document.createElement("img");
    elementImage.style.height = "100%";
    for (let i = 0; i < serials.length; i++) {
      if (image == serials[i].name) {
        elementImage.src = `./assets/img/${serials[i].srcfull}`;
        element.appendChild(elementImage);
        const elementScore = document.createElement("span");
        elementScore.style.position = "absolute";
        elementScore.style.top = 0;
        elementScore.style.right = 0;
        elementScore.style.padding = "0 1%";
        elementScore.style.margin = "1%";
        elementScore.style.borderRadius = "3px";
        if (image == serials[i].name) {
          elementScore.innerHTML = serials[i].rating;
          if (serials[i].rating >= 6.66) {
            elementScore.style.background = "green";
          } else if (serials[i].rating >= 3.33) {
            elementScore.style.background = "orange";
          } else {
            elementScore.style.background = "red";
          }
        }
        element.appendChild(elementScore);
        const elementA = document.createElement("a");
        if (image == serials[i].name) {
          elementA.innerHTML = serials[i].name;
        }
        elementA.href = "./pages/thismovie.html";
        element.appendChild(elementA);
        return element;
      }
      if (image == "Больше Сериалов") {
        const elementA = document.createElement("a");
        elementA.classList.add('moreMovies')
        elementA.innerHTML = image;
        elementA.href = "./pages/serials.html";
        element.appendChild(elementA);
        element.style.textAlign = 'center'
        element.style.paddingTop = "1%"
        return element;
      }
    }
  });
  imagesElementSerials = beltDOMItems.map((element) => element);
  beltDOMItems.forEach((beltDOMItem) => {
    containerSerials.appendChild(beltDOMItem);
  });
};
const containerSerials = document.querySelector(".sliderSerials");

createBeltScrollerSerials(containerSerials, [
  "Кухня",
  "Рик и Морти",
  "Слово пацана. Кровь на асфальте",
  "Хороший доктор",
  "Мандалорец",
  "Локи",
  "Вампиры средней полосы",
  "Пищеблок",
  "Гравити Фолз",
  "Чернобыль",
  "Больше Сериалов"
]);

// Mouse event handlers
const onMouseUpdateSerials = (event) => { mouseXSerials = event.pageX; }; // Mouse movement
const onMouseDownSerials = () => { isMouseDownSerials = true; }; // Mouse button press
const onMouseUpSerials = () => { isMouseDownSerials = false; }; // Mouse button release

// Add mouse event listeners
document.addEventListener("pointermove", onMouseUpdateSerials, false);
document.querySelector(".sliderSerials").addEventListener("pointerdown", onMouseDownSerials);
document.addEventListener("pointerup", onMouseUpSerials);
let TimeMouseVelocitySerials
const calculateMouseMomentumSerials = () => {
  if (isMouseDownSerials) {
    if (mouseXOnDownSerials == null) {
      mouseXOnDownSerials = mouseXSerials;
      containerVelocitySerials = 0;
    }
    const distance = mouseXSerials - mouseXOnDownSerials;

    if (prevMouseXSerials == 0) prevMouseXSerials = mouseXSerials
    mouseVelocitySerials = mouseXSerials - prevMouseXSerials
  } else {
    if (mouseXOnDownSerials != null) {
      containerVelocitySerials =
        ((2 * mouseMassSerials) / (mouseMassSerials + containerMassSerials)) * mouseVelocitySerials +
        ((containerMassSerials - mouseMassSerials) / (mouseMassSerials + containerMassSerials)) *
        containerVelocitySerials;

      const maxVelocity = 60;

      if (containerVelocitySerials > maxVelocity) {
        containerVelocitySerials = maxVelocity;
      } else if (containerVelocitySerials < -maxVelocity) {
        containerVelocitySerials = -maxVelocity;
      }

      mouseXOnDownSerials = null;
      mouseVelocitySerials = 0;
      mouseXSerials = 0
      prevMouseXSerials = 0

    }
  }
  prevMouseXSerials = mouseXSerials;
  mouseX = mouseXSerials;
};

const updateContainerSerials = () => {
  const boundRight = -containerSerials.offsetWidth + window.innerWidth - 85;

  const isOutBound =
    containerPositionSerials > 0 || containerPositionSerials < boundRight;

  if (!isMouseDownSerials) {
    const mu = 0.04;
    const g = 10;
    const flictionForce = containerMassSerials * g * mu;
    const flictionA = flictionForce / containerMassSerials;

    if (containerVelocitySerials > 0) {
      containerVelocitySerials -= flictionA;
      if (containerVelocitySerials < 0) {
        containerVelocitySerials = 0;
      }
    } else if (containerVelocitySerials < 0) {
      containerVelocitySerials += flictionA;
      if (containerVelocitySerials > 0) {
        containerVelocitySerials = 0;
      }
    }

    if (isOutBound) {
      const k = 0.01;
      const restLength = containerPositionSerials > 0 ? 0 : boundRight;
      const currentLength = containerPositionSerials;
      const dragForce = 1 * k * (restLength - currentLength);

      const dragForceA = dragForce / containerMassSerials;
      containerVelocitySerials += dragForce;

      const nextPosition = containerPositionSerials + containerVelocitySerials;

      if (containerPositionSerials < boundRight && nextPosition > boundRight) {
        containerVelocitySerials = 0;
        containerPositionSerials = boundRight;
      } else if (containerPositionSerials > 0 && nextPosition < 0) {
        containerVelocitySerials = 0;
        containerPositionSerials = 0;
      }
    }
  }

  containerPositionSerials = containerPositionSerials + containerVelocitySerials + (isOutBound ? mouseVelocitySerials / 2 : mouseVelocitySerials);
  containerSerials.style.transform = `translate(${containerPositionSerials}px)`;
};

const loopSerials = () => {
  calculateMouseMomentumSerials();
  updateContainerSerials();
  window.requestAnimationFrame(() => {
    loopSerials();
  });
};

loopSerials();
