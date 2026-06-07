const cursor = document.querySelector(".cursor");
const typeTexts = document.querySelectorAll(".interactive-type");
const body = document.body;

document.addEventListener("mousemove", function(event) {
  const x = event.clientX;
  const y = event.clientY;

  cursor.style.left = x + "px";
  cursor.style.top = y + "px";

  const xPercent = x / window.innerWidth;
  const yPercent = y / window.innerHeight;

  const letterSpacing = xPercent * 35 - 10;
  const moveAmount = yPercent * 80 - 40;

  typeTexts.forEach(function(type, index) {
    type.style.letterSpacing = letterSpacing + "px";

    if (index % 2 === 0) {
      type.style.transform = `translateX(${moveAmount}px)`;
    } else {
      type.style.transform = `translateX(${-moveAmount}px)`;
    }
  });

  const lightness = 8 + yPercent * 12;
  body.style.background = `hsl(0, 0%, ${lightness}%)`;
});

document.addEventListener("click", function() {
  typeTexts.forEach(function(type) {
    type.classList.toggle("outline");
  });
});
