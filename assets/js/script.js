// toogle modal

const modalOpenBtns = document.querySelectorAll(".modal-open");
const modalCloseBtns = document.querySelectorAll(".modal-close");
const modal = document.querySelector(".modal");

modalOpenBtns.forEach(openBtn => openBtn.onclick = () => modal.classList.add("open"));
modalCloseBtns.forEach(closeBtn => closeBtn.onclick = () => modal.classList.remove("open"))

modal.onclick = () => modal.classList.remove("open");
document.querySelector(".modal>.container").onclick = (e) => e.stopPropagation();


// navbar toggle

const navbarToggleBtn = document.querySelector(".navbar-toggle-btn");
const navbarToggle = document.querySelector(".navbar-toggle");
const navLink = document.querySelectorAll(".navbar a");

navbarToggleBtn.onclick = () => navbarToggle.classList.toggle("open");
navLink.forEach(link => link.onclick = () => navbarToggle.classList.remove("open"));    