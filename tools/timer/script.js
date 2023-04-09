// タイマーの初期値 (ミリ秒)
const DEFAULT_TIME = 60000;

let defaultTime = 60000;

function setDefaultTimeFromSelect() {
defaultTime = parseInt(document.querySelector('#time-select').value);
}
document.querySelector('#time-selector').addEventListener('change', () => {
  setDefaultTimeFromSelect();
  resetTimer();
});

// タイマーのDOM要素を取得
const timerDisplay = document.querySelector('.timer-display');
const hoursDisplay = timerDisplay.querySelector('.hours');
const minutesDisplay = timerDisplay.querySelector('.minutes');
const secondsDisplay = timerDisplay.querySelector('.seconds');

// タイマーの操作ボタンを取得
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const resetButton = document.querySelector('.reset-button');

// タイマーの時間を保持する変数
let timeLeft = DEFAULT_TIME;
let timerInterval;

// 時間を表示する関数
function displayTime() {
  const hours = Math.floor(timeLeft / 3600000);
  const minutes = Math.floor((timeLeft % 3600000) / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);

  hoursDisplay.textContent = hours.toString().padStart(2, '0');
  minutesDisplay.textContent = minutes.toString().padStart(2, '0');
  secondsDisplay.textContent = seconds.toString().padStart(2, '0');
}

// タイマーをスタートする関数
function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft -= 1000;
    displayTime();

    if (timeLeft <= 0) {
      stopTimer();
    }
  }, 1000);

  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
}

// タイマーをストップする関数
function stopTimer() {
  clearInterval(timerInterval);

  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
}

// タイマーをリセットする関数
function resetTimer() {
  timeLeft = DEFAULT_TIME;
  displayTime();

  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
}

// タイマーの操作ボタンにイベントリスナーを登録する
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

// 初期表示
displayTime();
stopButton.disabled = true;
resetButton.disabled = true;

