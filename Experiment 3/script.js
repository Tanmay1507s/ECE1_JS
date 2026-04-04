const heading = document.getElementById("main-heading");
const input = document.getElementById("heading-input");
const paragraph = document.getElementById("sample-para");
// Buttons
const btnChangeHeading = document.getElementById("btn-change-heading");
const btnChangeBg = document.getElementById("btn-change-bg");
const btnFontSize = document.getElementById("btn-font-size");
const btnTogglePara = document.getElementById("btn-toggle-para");
const btnReset = document.getElementById("btn-reset");
// Event Listeners
btnChangeHeading.addEventListener("click", () => {
  const newText = input.value.trim();
  if (newText) {
    heading.textContent = newText;
  } else {
    alert("Please enter text to change the heading!");
  }
});
btnChangeBg.addEventListener("click", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightyellow" ? "#f4f4f4" : "lightyellow";
});
btnFontSize.addEventListener("click", () => {
  heading.style.fontSize = "2.5em";
});

btnTogglePara.addEventListener("click", () => {
  if (paragraph.style.display === "none") {
    paragraph.style.display = "block";
  } else {
    paragraph.style.display = "none";
  }
});

btnReset.addEventListener("click", () => {
  heading.textContent = "Welcome to JavaScript Lab";
  document.body.style.backgroundColor = "#f4f4f4";
  heading.style.fontSize = "2em";
  paragraph.style.display = "block";
  input.value = "";
});