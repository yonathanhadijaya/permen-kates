//navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

//hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

function toggleBaca(){
  this.parentElement.style.display = 'none';
}

  function toggleBaca(element){
  // console.log(element.parentElement.children[1]);
  element.parentElement.children[1].classList.toggle("truncate");
  element.parentElement.children[0].children[0].classList.toggle("truncate");
}