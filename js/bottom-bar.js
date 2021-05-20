export const BottomBar = () => {
  const controlsBtn = document.querySelector('#controlsBtn');
  const controls = document.querySelector('#controls');

  controlsBtn.addEventListener('click', () => {
    controls.classList.toggle('controls--active');
  })
}