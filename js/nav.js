// Fixed nav: solid background once the page has scrolled,
// hidden while scrolling, shown again shortly after scrolling stops.
(function () {
  var nav = document.querySelector('.nav');
  if (!nav) return;
  var timer;
  var lastY = window.scrollY;

  function update() {
    var y = window.scrollY;
    nav.classList.toggle('is-solid', y > 8);
    // Only hide once past the top area, so the nav is always visible at the top.
    if (y > 80 && y !== lastY) nav.classList.add('is-hidden');
    lastY = y;
    clearTimeout(timer);
    timer = setTimeout(function () { nav.classList.remove('is-hidden'); }, 250);
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();
