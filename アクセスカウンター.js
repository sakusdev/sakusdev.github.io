window.onload = function() {
  var counterElement = document.getElementById('counter');
  var count = localStorage.getItem('count') || 0;

  function incrementCounter() {
    count++;
    counterElement.innerText = count;
    localStorage.setItem('count', count);
  }

  incrementCounter();
};

 function resetCount() {
    count = 0;
    counterElement.innerText = count;
    localStorage.removeItem('count');
  }