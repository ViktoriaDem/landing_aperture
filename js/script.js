const menuIcon = document.querySelector('.header__burger');
const menuBody = document.querySelector('.link__container');
if (menuIcon) {
    menuIcon.addEventListener("click", function (e) {
        document.body.classList.toggle('lock');
        menuIcon.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
}