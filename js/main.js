const buttonAboutUs = document.getElementById("button-about-us");
const teamSection = document.querySelector("#team-section");

//Navbar
window.addEventListener('scroll', function () {
    let header = this.document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 10)
})

//Button scroll Team
buttonAboutUs.addEventListener('click', function () {
    teamSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
})
