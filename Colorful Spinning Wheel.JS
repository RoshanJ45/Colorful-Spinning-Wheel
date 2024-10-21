const wheel = document.getElementById('wheel');
let isHovered = false;
wheel.addEventListener('mouseenter', () => {
wheel.style.animationPlayState = 'paused';
isHovered = true;
});
wheel.addEventListener('mouseleave', () => {
wheel.style.animationPlayState = 'running';
isHovered = false;
});
window.addEventListener('mousemove', (e) => {
if (isHovered) {
const x = e.clientX / window.innerWidth;
const y = e.clientY / window.innerHeight;
const hue = Math.floor((x + y) * 180);
wheel.style.filter = `hue-rotate(${hue}deg)`;
}
});
