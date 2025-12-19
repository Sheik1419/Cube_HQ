// Navbar Toggle Icon
document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const icon = toggler.querySelector(".toggler-icon");
  const navbar = document.querySelector(".navbar");
  toggler.addEventListener("click", function () {
    setTimeout(() => {
      if (toggler.getAttribute("aria-expanded") === "true") {
        navbar.classList.add("solid");
        icon.classList.replace("fa-bars", "fa-xmark");
        icon.style.opacity = "1";
      } else {
        navbar.classList.remove("solid");
        icon.classList.replace("fa-xmark", "fa-bars");
        icon.style.opacity = "1";
      }
    }, 300);
  });
});

// Navbar Scroll (Solid)
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".navbar").addClass("solid");
    } else {
      $(".navbar").removeClass("solid");
    }
  });
});

// Counter Section
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter-content h2");
  let started = false;
  const startCounter = () => {
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      let count = 0;

      const updateCounter = () => {
        const increment = Math.ceil(target / 1000);
        count += increment;

        if (count < target) {
          counter.innerText = count + "%";
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target + "%";
        }
      };

      updateCounter();
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          started = true;
          startCounter();
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(document.getElementById("counterSection"));
});

// Accordion
new Accordion(".collection-accordion", {
  openOnInit: [0],
});
new Accordion(".about-accordion", {
  openOnInit: [0],
});

// Accordion Radio Button Issue
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll('.ac input[type="radio"], .ac label')
    .forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    });
});
