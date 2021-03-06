var buttonValue = document.querySelector("#mexicoBtn");
var buttonValueAmerican = document.querySelector("#americanBtn");
var buttonValueFrance = document.querySelector("#franceBtn");
var buttonValueItaly = document.querySelector("#italynBtn");
var buttonValueIndian = document.querySelector("#indiaBtn");
var buttonValueChina = document.querySelector("#chinaBtn");
var buttonValueJapan = document.querySelector("#japanBtn");
var buttonValueGreece = document.querySelector("#greeceBtn");
var buttonValueJamaica = document.querySelector("#jamaicaBtn");
const createTitlePlacement = document.getElementById("title");
const dessertTitlePlacement = document.getElementById("dessertTitle");
const createIngridientsPlacementDessert = document.getElementById(
  "dessertingridients"
);
const createImagePlacementDessert = document.getElementById("dessertimage");
const createInstructions = document.getElementById("instructions");
const createImagePlacement = document.getElementById("image");
const createIngridientsPlacement = document.getElementById("ingridients");
const buttonSection = document.getElementById("likebutton");

function hidePages() {
  const ingridientSection = document.getElementById("recipes-container");
  const landingPage = document.getElementById("img-container")
  landingPage?.replaceWith(ingridientSection);
}

window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}





var onClickCuisineMexico = function (event) {
  event.preventDefault();
  var mexicanButtonValue = buttonValue.value;
  if (mexicanButtonValue) {
    hidePages();
    getCuisinaCountry(mexicanButtonValue);
    getDessertCuisine(mexicanButtonValue);
    clearContent();
  }
};

var onClickCuisineAmerica = function (event) {
  event.preventDefault();
  var americanButtonValue = buttonValueAmerican.value;
  if (americanButtonValue) {
    hidePages();
    getCuisinaCountry(americanButtonValue);
    getDessertCuisine(americanButtonValue);
    clearContent();
  }
};

var onClickCuisineFrance = function (event) {
  event.preventDefault();
  var franceButtonValue = buttonValueFrance.value;
  if (franceButtonValue) {
    hidePages();
    getCuisinaCountry(franceButtonValue);
    getDessertCuisine(franceButtonValue);
    clearContent();
  }
};

var onClickCuisineItaly = function (event) {
  event.preventDefault();
  var italyButtonValue = buttonValueItaly.value;
  if (italyButtonValue) {
    hidePages();
    getCuisinaCountry(italyButtonValue);
    getDessertCuisine(italyButtonValue);
    clearContent();
  }
};

var onClickCuisineIndian = function (event) {
  event.preventDefault();
  var indianButtonValue = buttonValueIndian.value;
  if (indianButtonValue) {
    hidePages();
    getCuisinaCountry(indianButtonValue);
    getDessertCuisine(indianButtonValue);
    clearContent();
  }
};

var onClickCuisineChina = function (event) {
  event.preventDefault();
  var chinaButtonValue = buttonValueChina.value;
  if (chinaButtonValue) {
    hidePages();
    getCuisinaCountry(chinaButtonValue);
    getDessertCuisine(chinaButtonValue);
    clearContent();
  }
};

var onClickCuisineJapan = function (event) {
  event.preventDefault();
  var japanButtonValue = buttonValueJapan.value;
  if (japanButtonValue) {
    hidePages();
    getCuisinaCountry(japanButtonValue);
    getDessertCuisine(japanButtonValue);
    clearContent();
  }
};

var onClickCuisineGreece = function (event) {
  event.preventDefault();
  var greekButtonValue = buttonValueGreece.value;
  if (greekButtonValue) {
    hidePages();
    getCuisinaCountry(greekButtonValue);
    getDessertCuisine(greekButtonValue);
    clearContent();
  }
};

var onClickCuisineJamaica = function (event) {
  event.preventDefault();
  var jamaicaButtonValue = buttonValueJamaica.value;
  if (jamaicaButtonValue) {
    hidePages();
    getCuisinaCountry(jamaicaButtonValue);
    clearContent();
  }
};

var getDessertCuisine = function (cuisine) {
  fetch(
    "https://api.edamam.com/search?q=Desserts&app_id=96a1ce69&app_key=bdba3210ad31eeb9ca5d5c1cc397acb7&from=1&to=5&cuisineType=" +
    cuisine
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE NOT OK");
      }
    })
    .then(function (data) {
      console.log(data);
      displayDessertRecipes(data);
    });

};

function displayDessertRecipes(data) {
  // Title
  const dessertName = data.hits[2].recipe.label;
  const createDessertTitle = document.createElement("h1");
  createDessertTitle.innerHTML = dessertName;
  dessertTitlePlacement.appendChild(createDessertTitle);

  //Ingridients + Instructions
  const createIngridientsSectionDessert = document.createElement("div");
  const getIngridientsDesserts = data.hits[2].recipe.url;
  //createIngridientsPlacementDessert.innerHTML = "<h2> Ingridients: </h2>" + getIngridientsDesserts;
  createIngridientsSectionDessert.innerHTML = "<a href=" + getIngridientsDesserts + " target=_blank> Check out the recipe</a>";
  createIngridientsPlacementDessert.appendChild(createIngridientsSectionDessert);

  //Image
  const createImageSectionDessert = document.createElement("img");
  const getImageDessert = data.hits[2].recipe.image;
  //createImageSectionDessert.innerHTML = "<img src=" + getImageDessert + ">";
  createImageSectionDessert.setAttribute('src', getImageDessert);
  createImageSectionDessert.setAttribute('class', 'imagesize')
  createImagePlacementDessert.appendChild(createImageSectionDessert);

}

var getCuisinaCountry = function (cuisine) {
  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + cuisine)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE NOT OK");
      }
    })
    .then(function (data) {
      console.log(data);
      displayCuisineRecipes(data);
    })
    .catch((error) => {
      console.error("FETCH ERROR:", error);
    });

  function displayCuisineRecipes(data) {
    cuisineNumber = data.meals[1].idMeal;
    const createRecipeSection = document.createElement("li");
    const getRecipeInformation =
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + cuisineNumber;
    fetch(getRecipeInformation)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("NETWORK RESPONSE NOT OK");
        }
      })
      .then(function (data) {
        console.log(data);
        const instructionsRecipe = data.meals[0].strInstructions;
        createRecipeSection.innerHTML = instructionsRecipe;
        createInstructions.appendChild(createRecipeSection);

        //Title
        const createTitleSection = document.createElement("h1");
        const getTitle = data.meals[0].strMeal;
        createTitleSection.innerHTML = getTitle;
        createTitlePlacement.appendChild(createTitleSection);

        //Image
        const createImageSection = document.createElement("img");
        const getImage = data.meals[0].strMealThumb;
        //createImageSection.innerHTML = "<img src=" + getImage + ">";
        createImageSection.setAttribute('class', 'imagesize')
        createImageSection.setAttribute('src', getImage);
        createImagePlacement.appendChild(createImageSection);

        //Ingridients
        const createIngridientsSection = document.querySelector("#ingridients");
        const getIngridients = data.meals[0].strIngredient1;
        const getIngridients2 = data.meals[0].strIngredient2;
        const getIngridients3 = data.meals[0].strIngredient3;
        const getIngridients4 = data.meals[0].strIngredient4;
        const getIngridients5 = data.meals[0].strIngredient5;
        const getIngridients6 = data.meals[0].strIngredient6;
        const getIngridients7 = data.meals[0].strIngredient7;
        const getIngridients8 = data.meals[0].strIngredient8;
        const getIngridients9 = data.meals[0].strIngredient9;
        const getIngridients10 = data.meals[0].strIngredient10;
        createIngridientsSection.innerHTML =
          "<h2> Ingridients: </h2>" +
          "<ol>" +
          getIngridients +
          "</ol>" +
          "<ol>" +
          getIngridients2 +
          "</ol>" +
          "<ol>" +
          getIngridients3 +
          "</ol>" +
          "<ol>" +
          getIngridients4 +
          "</ol>" +
          "<ol>" +
          getIngridients5 +
          "</ol>" +
          "<ol>" +
          getIngridients6 +
          "</ol>" +
          "<ol>" +
          getIngridients7 +
          "</ol>" +
          "<ol>" +
          getIngridients8 +
          "</ol>" +
          "<ol>" +
          getIngridients9 +
          "</ol>" +
          "<ol>" +
          getIngridients10 +
          "</ol>"
        //createIngridientsSection.appendChild(createIngridientsSection);

        // Like Button
        //const createButtonSection = document.createElement("button");
        const buttonSection = document.getElementById("likebutton");
        //createButtonSection.setAttribute("class", "fa fa-heart red-color")
        buttonSection.setAttribute('class', 'fa fa-heart red-color');
        const buttonIdNumber = data.meals[0].idMeal;
        buttonSection.setAttribute("value", buttonIdNumber);
        //buttonSection.appendChild(createButtonSection)

      });
  }
};

function clearContent() {
  createTitlePlacement.textContent = "";
  dessertTitlePlacement.textContent = "";
  createIngridientsPlacementDessert.textContent = "";
  createImagePlacementDessert.textContent = "";
  createInstructions.textContent = "";
  createTitlePlacement.textContent = "";
  createImagePlacement.textContent = "";
  createIngridientsPlacement.textContent = "";
}

buttonValue.addEventListener("click", onClickCuisineMexico);
buttonValueAmerican.addEventListener("click", onClickCuisineAmerica);
buttonValueFrance.addEventListener("click", onClickCuisineFrance);
buttonValueItaly.addEventListener("click", onClickCuisineItaly);
buttonValueIndian.addEventListener("click", onClickCuisineIndian);
buttonValueChina.addEventListener("click", onClickCuisineChina);
buttonValueJapan.addEventListener("click", onClickCuisineJapan);
buttonValueGreece.addEventListener("click", onClickCuisineGreece);
buttonValueJamaica.addEventListener("click", onClickCuisineJamaica);

class Slideshow {
  constructor() {
    this.initSlides();
    this.initSlideshow();
  }

  // Set a `data-slide` index on each slide for easier slide control.
  initSlides() {
    this.container = $("[data-slideshow]");
    this.slides = this.container.find("img");
    this.slides.each((idx, slide) => $(slide).attr("data-slide", idx));
  }

  // Pseudo-preload images so the slideshow doesn't start before all the images
  // are available.
  initSlideshow() {
    this.imagesLoaded = 0;
    this.currentIndex = 0;
    this.setNextSlide();
    this.slides.each((idx, slide) => {
      $("<img>")
        .on("load", $.proxy(this.loadImage, this))
        .attr("src", $(slide).attr("src"));
    });
  }

  // When one image has loaded, check to see if all images have loaded, and if
  // so, start the slideshow.
  loadImage() {
    this.imagesLoaded++;
    if (this.imagesLoaded >= this.slides.length) {
      this.playSlideshow();
    }
  }

  // Start the slideshow.
  playSlideshow() {
    this.slideshow = window.setInterval(() => {
      this.performSlide();
    }, 5000);
  }

  // 1. Previous slide is unset.
  // 2. What was the next slide becomes the previous slide.
  // 3. New index and appropriate next slide are set.
  // 4. Fade out action.
  performSlide() {
    if (this.prevSlide) {
      this.prevSlide.removeClass("prev fade-out");
    }

    this.nextSlide.removeClass("next");
    this.prevSlide = this.nextSlide;
    this.prevSlide.addClass("prev");

    this.currentIndex++;
    if (this.currentIndex >= this.slides.length) {
      this.currentIndex = 0;
    }

    this.setNextSlide();

    this.prevSlide.addClass("fade-out");
  }

  setNextSlide() {
    this.nextSlide = this.container
      .find(`[data-slide="${this.currentIndex}"]`)
      .first();
    this.nextSlide.addClass("next");
  }
}
new Slideshow()

// function localStorage () {
//    const buttonSection = document.getElementById("likebutton");

//    let myFavRecipe_serialized = JSON.stringify()
//    localStorage.setItem("myFavoriteMeal", )


var favoriteMeal = function (idNumber) {
  fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + idNumber)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE NOT OK");
      }
    })
    .then(function (data) {
      console.log(data.meals[0].strMeal);
      displayFavorite(data);
    })
    .catch((error) => {
      console.error("FETCH ERROR:", error);
    });
}

function displayFavorite(data) {
  const favoriteList = document.getElementById("titlesfavorites")
  const createTitleSectionFav = document.createElement("ol");
  const getTitleFav = data.meals[0].strMeal;
  createTitleSectionFav.innerHTML =  getTitleFav
  favoriteList.appendChild(createTitleSectionFav);

  let myFavList_serialized = JSON.stringify(getTitleFav)
  window.localStorage.setItem('favoritemeal', myFavList_serialized);

  let myFavList_deserialized = JSON.parse(localStorage.getItem("favoritemeal"));
  console.log(myFavList_deserialized)
}

function loadPageFav() {

  let listOFood = document.getElementById("titlesfavorites")
  let foodFromLocal = JSON.parse(localStorage.getItem("favoritemeal"));

  if (foodFromLocal) {
    const foodOl = document.createElement("ol");
    foodOl.innerHTML += foodFromLocal
    console.log('food from foodOl storage', foodFromLocal)
    listOFood.appendChild(foodOl);
  
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const foodFromLocal = localStorage.getItem(key)
  
      foodOl.innerHTML += foodFromLocal;
  }
  }
  

 
}
loadPageFav()

var onClickMexicanFavorite = function (event) {

  var buttonFav = buttonSection.getAttribute("value")
  if (buttonFav) {
    favoriteMeal(buttonFav);
  }
  console.log(buttonFav)
}

buttonSection.addEventListener("click", onClickMexicanFavorite);

