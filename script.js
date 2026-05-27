const darkModeBtn = document.getElementById("darkModeBtn");
const lightModeBtn = document.getElementById("lightModeBtn");
const heading = document.querySelector("h1");
const paragraph = document.querySelector("p");

darkModeBtn.addEventListener("click", () =>{
  document.body.style.backgroundColor = "#111010";
  heading.style.color = "#f3f5d4";
  paragraph.style.color = "#f3f5d4";

  darkModeBtn.style.border = "1px solid #f3f5d4";
})

lightModeBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#f3f5d4";
  heading.style.color = "#111010";
  paragraph.style.color = "#111010";

  lightModeBtn.style.border = "1px solid #111010";
})