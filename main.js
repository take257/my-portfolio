const slideDown = function (el) {
  el.style.height = "auto";
  let h = el.offsetHeight;
  el.style.height = h + "px";
  el.animate([{ height: 0 }, { height: h + "px" }], {
    duration: 300,
  });
};

const slideUp = function (el) {
  let h = el.offsetHeight;
  el.style.height = h + "px";
  el.animate([{ height: h + "px" }, { height: 0 }], { duration: 300 });
  el.style.height = 0;
};

const hiddenpart = document.getElementById("accordions");
const accordionBtn = document.getElementById("accordionBtn");
const BtnandList = document.getElementById("BtnandUl");

accordionBtn.addEventListener("click", function (e) {
  BtnandList.classList.toggle("active");
  const content = document.getElementById("UlandLi");

  if (BtnandList.classList.contains("active")) {
    slideDown(content);
  } else {
    slideUp(content);
  }
});

const FADEIN = function (el) {
  const FADEIN_TOP = el.getBoundingClientRect().top;
  const WINDOW_HEIGHT = window.innerHeight;
  if (WINDOW_HEIGHT > FADEIN_TOP) {
    el.classList.add("fadein-after");
  } else {
    el.classList.remove("fadein-after");
  }
};

const first = document.getElementById("basic_fadein");
const second = document.getElementById("background_fadein");
const third = document.getElementById("favorite_fadein");
window.addEventListener("scroll", function () {
  FADEIN(first);
});
window.addEventListener("scroll", function () {
  FADEIN(second);
});
window.addEventListener("scroll", function () {
  FADEIN(third);
});

const lifting_stop = document.getElementById("Liftingstop");
const lifting_strat = document.getElementById("Liftingstrat");

lifting_stop.onclick = function () {
  lifting_stop.classList.add("removepicture");
  lifting_strat.classList.remove("removepicture");
};
lifting_strat.onclick = function () {
  lifting_strat.classList.add("removepicture");
  lifting_stop.classList.remove("removepicture");
};
