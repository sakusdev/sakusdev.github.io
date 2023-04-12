const startBtn = document.getElementById("startBtn");
const speedDisplay = document.getElementById("speedDisplay");

startBtn.addEventListener("click", function() {
    const xhr = new XMLHttpRequest();
    const startTime = Date.now();
    xhr.open("GET", "https://github.com/sakusdev/internetspeedfile_/raw/main/inter.bin", true);
    xhr.responseType = "blob";
    xhr.onload = function() {
        const endTime = Date.now();
        const duration = (endTime - startTime) / 1000;
        const fileSize = xhr.response.size;
        const speed = fileSize / duration / 1024 / 1024;
        speedDisplay.innerText = "測定結果: " + speed.toFixed(2) + " Mbps";
    };
    xhr.send();
});
