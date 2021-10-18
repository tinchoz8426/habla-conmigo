const buttonAboutUs = document.getElementById("button-about-us");
const teamSection = document.querySelector("#team-section");
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

//Button scroll Team
buttonAboutUs.addEventListener('click', function () {
    teamSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
})