const buttonAboutUs = document.getElementById("button-about-us");
// const buttonContactForm = document.getElementById("button-contact-form");
const teamSection = document.querySelector("#team-section");
// const formSection = document.querySelector("#form");
const navbarList = document.querySelector(".navbar-list__container");

//Navbar
window.addEventListener('scroll', function () {
    let header = this.document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 10)
})
function hideNav() {
    navbarList.style.right = "-110%";
}
function showNav() {
    navbarList.style.right = "0";
}

//Button scroll Team
if (buttonAboutUs) {
    buttonAboutUs.addEventListener('click', () => {
        teamSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    })
}

//Envio de formulario MODAL
function submitForm(form) {
    Swal.fire({
        title: 'Tu consulta ha sido enviada con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}