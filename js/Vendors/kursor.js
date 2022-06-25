const kursorPointer = new kursor({
  type: 4,
  color: "#101010",
});

const buttonList = document.querySelectorAll(".btn");
const socialList = document.querySelectorAll(".header_social_item");
const navList = document.querySelectorAll(".header_right_item");
const headerLeft = document.querySelector(".header_left");
const projectList = document.querySelectorAll(".project_container_cell_left");
const linkProjectList = document.querySelectorAll(
  ".project_container_cell_link"
);
const footerArea = document.querySelector(".footer");
const kursorEle = document.querySelector(".kursor");
setInterval(() => {
  if (
    socialList[0].matches(":hover") ||
    socialList[1].matches(":hover") ||
    socialList[2].matches(":hover") ||
    navList[0].firstElementChild.matches(":hover") ||
    navList[1].firstElementChild.matches(":hover") ||
    navList[2].firstElementChild.matches(":hover") ||
    navList[3].firstElementChild.matches(":hover") ||
    buttonList[0].matches(":hover") ||
    buttonList[1].matches(":hover") ||
    buttonList[2].matches(":hover") ||
    buttonList[3].matches(":hover") ||
    buttonList[4].matches(":hover") ||
    projectList[0].matches(":hover") ||
    linkProjectList[0].matches(":hover") ||
    headerLeft.matches(":hover")
  )
    kursorEle.classList.add("--hover");
  else kursorEle.classList.remove("--hover");

  if (footerArea.matches(":hover")) {
    document.querySelector("body").classList.add("has-cursor");
  } else {
    document.querySelector("body").classList.remove("has-cursor");
  }
}, 150);
