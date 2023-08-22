window.onload = function() {
  var counterElement = document.getElementById('counter');

  function updateCounter(count) {
    counterElement.innerText = count;
  }

  fetch('https://zealous-near-biology.glitch.me:4000', { method: 'POST' })
    .then(response => response.json())
    .then(data => updateCounter(data.count))
    .catch(error => console.error(error));
};
