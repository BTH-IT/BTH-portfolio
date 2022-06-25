window.onscroll = () => handleScroll();

function handleScroll() {
  if (window.scrollY > 0) {
    document.querySelector(".header_nav").classList.add("nav--scroll");
  } else {
    document.querySelector(".header_nav").classList.remove("nav--scroll");
  }
}

function showAnimationLoading() {
  document.querySelector(".loading").classList.add("animate__fadeOut");
  document.querySelector(".loading--bg").classList.add("animate__zoomOut");
}

function showPage() {
  document.querySelector(".loading").style.display = "none";
  document.querySelector(".loading--bg").style.display = "none";
  document.querySelector(".loaded").style.display = "block";
}

setTimeout(showAnimationLoading, 3000);
setTimeout(showPage, 3200);
