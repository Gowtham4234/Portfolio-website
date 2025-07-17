
// Interactive changing text in home section
const phrases = [
  "Web Developer",
  "AI & ML Developer",
  "Full-stack Java Developer"
];
let currentPhrase = 0;
const textElem = document.getElementById("changing-text");
if (textElem) {
  setInterval(() => {
    textElem.classList.add("fade");
    setTimeout(() => {
      currentPhrase = (currentPhrase + 1) % phrases.length;
      textElem.textContent = phrases[currentPhrase];
      textElem.classList.remove("fade");
    }, 500);
  }, 2200);
}

document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector("nav ul").classList.remove("open");
  });
});
