const buttonAboutUs = document.getElementById("button-about-us");
const buttonContactForm = document.getElementById("button-contact-form");
const teamSection = document.querySelector("#team-section");
const formSection = document.querySelector("#form");
const navbarList = document.querySelector(".navbar-list__container");

//Navbar
window.addEventListener('scroll', function () {
    let header = this.document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 10)
})
function hideNav(){
    navbarList.style.right = "-110%";
}
function showNav(){
    navbarList.style.right = "0";
}




buttonContactForm.addEventListener('click', function () {
    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
})
//Button scroll Team
buttonAboutUs.addEventListener('click', function () {
    teamSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
})

