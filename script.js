//  Fonctionnalité 1 -- clique et numéro

let footerCounter = 0;
document
  .getElementsByTagName("footer")[0]
  .addEventListener("click", function () {
    footerCounter++;
    console.log(`Clic numéro ${footerCounter}`);
  });

//  Fonctionnalité 2 -- Affichage "Hamburger Menu"

let menu = document.getElementById("navbarHeader");
let button = document.querySelector(".navbar-toggler-icon");

button.addEventListener("click", () => {
  menu.classList.toggle("collapse");
});

//  Fontionnalité 3 -- Texte en rouge

let card = document.getElementsByClassName("card-body")[0];
let button1 = document.querySelector(".btn-outline-secondary");

button1.addEventListener("click", () => {
  card.style.color = "red";
});

//  Fontionnalité 4 -- Texte en vert

let secondcard = document.getElementsByClassName("card-body")[1];
let button2 = document.getElementsByClassName("btn-outline-secondary")[1];

button2.addEventListener("click", () => {
  secondcard.style.color == "green"
    ? (secondcard.style.color = "black")
    : (secondcard.style.color = "green");
});

// Fonctionnalité 5 -- Casser le css avec un double-clic

let navbar = document.getElementsByClassName("navbar")[0];

navbar.addEventListener("dblclick", () => {
  document.styleSheets[0].disabled == true
    ? (document.styleSheets[0].disabled = false)
    : (document.styleSheets[0].disabled = true);
});

// Fontionnalité 6 -- Cacher le texte et réduire logo

let viewButtons = document.getElementsByClassName("btn btn-sm btn-success");
for (let i = 0; i < viewButtons.length; i++) {
  viewButtons[i].addEventListener("mouseover", function () {
    document.getElementsByClassName("card-text")[i].classList.toggle("d-none");
    document.getElementsByClassName("card-img-top")[i].classList.toggle("w-25");
  });
}

// Fonctionnalité 7 -- Changer l'ordre des cards

document
  .getElementsByClassName("jumbotron")[0]
  .getElementsByTagName("a")[1]
  .addEventListener("click", function () {
    document
      .getElementsByClassName("row")[1]
      .prepend(document.getElementsByClassName("col-md-4")[5]);

    let viewButtons = document.getElementsByClassName("btn btn-sm btn-success");
    for (let i = 0; i < viewButtons.length; i++) {
      viewButtons[i].addEventListener("mouseover", function () {
        document
          .getElementsByClassName("card-text")
          [i].classList.toggle("d-none");
        document
          .getElementsByClassName("card-img-top")
          [i].classList.toggle("w-25");
      });
    }
  });
