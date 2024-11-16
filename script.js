const main = document.querySelector(".main");
const movingImage = document.querySelector(".movingImage");
const centerDot = document.querySelector(".center-dot");

main.addEventListener("mousemove", (event) => {
  const rect = main.getBoundingClientRect(); // Get the position of the div
  const centerX = rect.left + rect.width / 2; // X center of the div
  const centerY = rect.top + rect.height / 2; // Y center of the div

  const mouseX = event.clientX; // X position of the mouse
  const mouseY = event.clientY; // Y position of the mouse

  // Calculate the angle between the mouse and the center of the div
  const deltaX = mouseX - centerX;
  const deltaY = mouseY - centerY;
  const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); // Angle in degrees

  // Rotate the moving image around the center of the div
  movingImage.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
});
