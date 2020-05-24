const navLinks = document.querySelectorAll(".scroll");
const navTitle = document.querySelector(".nav-title");
const header = document.querySelector(".nav-header");
const customerImage = document.querySelector(".customer-img");
const customerTags = document.querySelectorAll(".customer-tag");
const duration = 350;

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = e.currentTarget;
    const targetId = target.dataset["href"];
    smoothScroll({ targetId, duration });

    history.replaceState(undefined, undefined, `#${targetId}`);
  });
});

navTitle.addEventListener("click", e => {
  e.preventDefault();
  const homePosition = -1 * window.pageYOffset;
  smoothScroll({ targetElPosition: homePosition, duration });
});

window.addEventListener("scroll", e => {
  if (window.scrollY > 150) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

for (let i = 0; i < customerTags.length; i++) {
  const customer = customerTags[i];
  customer.addEventListener("mouseenter", e => {
    const target = e.currentTarget;
    const content = target.textContent;
    const fileType = ".png";
    const path = "assets/img/";
    const fullPath = `${path}777X-${content
      .toLowerCase()
      .replace(/\s/g, "-")}${fileType}`;
    customerImage.style.backgroundImage = `url(${fullPath})`;
  });
}
