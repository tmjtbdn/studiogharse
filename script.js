fetch('logo.svg')
  .then(res => res.text())
  .then(svg => {
    document.getElementById('logo').innerHTML = svg;
    const svgElement = document.querySelector('#logo svg');
    svgElement.querySelectorAll('[fill], .cls-1').forEach(el => {
      el.setAttribute('fill', 'white');
      el.style.fill = 'white';
    });
  });

const maxOffset = 15;
document.addEventListener('mousemove', (e) => {
  const { innerWidth, innerHeight } = window;
  const offsetX = ((e.clientX / innerWidth) - 0.5) * 2 * maxOffset;
  const offsetY = ((e.clientY / innerHeight) - 0.5) * 2 * maxOffset;
  const logo = document.querySelector('.logo svg');
  if (logo) {
    logo.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }
});
