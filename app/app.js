const navLinks = document.querySelectorAll(".scroll");
const navTitle = document.querySelector(".nav-title");
const header = document.querySelector(".navbar");
const customerImage = document.querySelector(".customer-img");
const customerTags = document.querySelectorAll(".customer-tag");
const heroImage = document.querySelector(".hero-image");
const duration = 350;

heroImage.innerHTML = svg.planeHero;
customerImage.innerHTML = svg.airlinePlanes;

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.currentTarget;
    const targetId = target.dataset["href"];
    smoothScroll({ targetId, duration, paddingTop: 85 });

    history.replaceState(undefined, undefined, `#${targetId}`);
  });
});

navTitle.addEventListener("click", (e) => {
  e.preventDefault();
  const homePosition = -1 * window.pageYOffset;
  smoothScroll({ targetElPosition: homePosition, duration });
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 150) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

for (let i = 0; i < customerTags.length; i++) {
  const customer = customerTags[i];
  customer.addEventListener("mouseenter", (e) => {
    const allAirplanes = document.querySelectorAll(`[data-airplane]`);
    const target = e.currentTarget;
    const content = target.textContent.toLowerCase().replace(/\s/g, "-");
    const targetAirplane = customerImage.querySelector(
      `[data-airplane="${content}"]`
    );

    targetAirplane.style.opacity = "1";

    allAirplanes.forEach((airplane) => {
      if (airplane !== targetAirplane) {
        airplane.style.opacity = "0";
      }
    });
  });
}
