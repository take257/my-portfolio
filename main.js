const FADEIN_BASIC = document.getElementById("basic_fadein");

window.addEventListener("scroll", function () {
  const FADEIN_BASIC_TOP = FADEIN_BASIC.getBoundingClientRect().top;
  /*フェードインする要素の上部の位置を取得する*/
  const WINDOW_HEIGHT = window.innerHeight;
  /*ブラウザの高さを取得*/
  if (WINDOW_HEIGHT > FADEIN_BASIC_TOP) {
    FADEIN_BASIC.classList.add("fadein-after");
  } else {
    FADEIN_BASIC.classList.remove("fadein-after");
  }
});
// //植物の写真右側にフェードイン用

const FADEIN_BACKGROUND = document.getElementById("background_fadein");

window.addEventListener("scroll", function () {
  const FADEIN_BACKGROUND_TOP = FADEIN_BACKGROUND.getBoundingClientRect().top;
  /*フェードインする要素の上部の位置を取得する*/
  const WINDOW_HEIGHT = window.innerHeight;
  /*ブラウザの高さを取得*/
  if (WINDOW_HEIGHT > FADEIN_BACKGROUND_TOP) {
    FADEIN_BACKGROUND.classList.add("fadein-after");
  } else {
    FADEIN_BACKGROUND.classList.remove("fadein-after");
  }
});

const FADEIN_FAVORITE = document.getElementById("favorite_fadein");

window.addEventListener("scroll", function () {
  const FADEIN_FAVORITE_TOP = FADEIN_FAVORITE.getBoundingClientRect().top;
  /*フェードインする要素の上部の位置を取得する*/
  const WINDOW_HEIGHT = window.innerHeight;
  /*ブラウザの高さを取得*/
  if (WINDOW_HEIGHT > FADEIN_FAVORITE_TOP) {
    FADEIN_FAVORITE.classList.add("fadein-after");
  } else {
    FADEIN_FAVORITE.classList.remove("fadein-after");
  }
});

// // /*ここからリフティング切り替え*/
const lifting_space = document.getElementById("Liftingchange");
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
