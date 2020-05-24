const copyright = document.getElementById("copyright");

const currentYear = new Date().getFullYear();
const owner = "Caleb";
const content = `${owner} Ⓒ${currentYear}`;

copyright.textContent = content;
