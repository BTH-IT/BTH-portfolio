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

let timeOutId,
  flag = false;

function handleClick() {
  const navEle = document.querySelector(".header_right");
  const overlayEle = document.querySelector(".overlay");
  if (flag) {
    flag = !flag;
    navEle.classList.remove("animate__fadeIn");
    overlayEle.classList.remove("show");
    navEle.classList.add("animate__fadeOut");
    if (timeOutId) clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      navEle.classList.remove("show");
      navEle.classList.remove("animate__fadeOut");
    }, 700);
  } else {
    flag = !flag;
    overlayEle.classList.add("show");
    navEle.classList.add("show");
    navEle.classList.add("animate__fadeIn");
  }
}

setTimeout(showAnimationLoading, 3000);
setTimeout(showPage, 3200);
