// Reveals the video section when it comes into view
const videoSection = document.getElementById("mainColumnB").querySelectorAll(".videoSection");
const checkIfVisible = (section) => {
  return section.getBoundingClientRect().top < window.innerHeight;
};

window.addEventListener("scroll", () => {
  videoSection.forEach((section) => {
    if (checkIfVisible(section)) {
      section.classList.add("visible");
    }
  });
});
