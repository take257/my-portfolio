/*フェードインの考えかた
1,フェードインのタイミングはページが表示される高さ(=パソコン画面の高さ)(window.innerHeight;)
  >表示されている画面上で上(左上)から要素までの長さ(getBoundingClientRect().top)
の時
2,cssで透過度100%て少し右にずらして設置している→fadein-afterをクラスに加えて、cssで
透過度0の表示したい位置に設置する　＊cssで、htmlの同じ要素に適応される設定がある場合、
後から出てきた方が表示される。この上書きの規則カスケードというらしい。
*/
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

/*リフティングの切替え
○と■のように画像を押すと切りremovepictureがクラスに加わるようになっている.
removepictureはcssでdisplay: none;で表示しないという機能。動いている画像を
クリックすると静止画画の方からremovepictureが取り除かれて表示される一方で動いている方に
removepictureが追加されるようになっている。*/
// // /*ここからリフティング切り替え*/

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
