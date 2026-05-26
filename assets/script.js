const type = document.querySelector(".interactive-type");

document.addEventListener("mousemove", function(event) {
  const x = event.clientX;
  const y = event.clientY;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const xPercent = x / windowWidth;
  const yPercent = y / windowHeight;

  const letterSpace = xPercent * 30;
  const scale = 1 + yPercent * 1.5;

  type.style.letterSpacing = letterSpace + "px";
  type.style.transform = `scale(${scale})`;
});
