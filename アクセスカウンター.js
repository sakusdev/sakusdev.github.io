window.onload = function() {
    // カウンター要素を取得
    var counterElement = document.getElementById('counter');
  
    // カウンターの初期値
    var count = 0;
  
    // カウンターをインクリメントする関数
    function incrementCounter() {
      count++;
      counterElement.innerText = count;
    }
  
    // ページが読み込まれたときにカウンターをインクリメント
    incrementCounter();
  };
  