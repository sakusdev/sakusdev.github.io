let timer = null;
let time = 0;

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

function updateTime() {
  time += 1;
  const min = Math.floor(time / 60);
  const sec = time % 60;
  const hour = Math.floor(min / 60);
  const displayTime = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  display.innerText = displayTime;
}

startBtn.addEventListener('click', function() {
  if (timer === null) {
    timer = setInterval(updateTime, 1000);
  }
});

stopBtn.addEventListener('click', function() {
  clearInterval(timer);
  timer = null;
});

resetBtn.addEventListener('click', function() {
  clearInterval(timer);
  timer = null;
  time = 0;
  display.innerText = '00:00:00';
});
 