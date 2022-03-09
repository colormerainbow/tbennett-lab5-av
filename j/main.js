
const lowRider = document.querySelector('.low-rider');
const leverage = document.querySelector('.leverage');

lowRider.preload = true; //helps to prepare it to play when ready
lowRider.volume = 0.5; //presets the volume levels on pageload

leverage.volume = 0.5;

document.getElementById('stop').addEventListener('click', (e) => {
    lowRider.pause();
    lowRider.currentTime = 0; //sets it back to the beginning after you press stop
});