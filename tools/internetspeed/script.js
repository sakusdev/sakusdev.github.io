const startBtn = document.getElementById("startBtn");
const speedDisplay = document.getElementById("speedDisplay");

startBtn.addEventListener("click", function() {
    const xhr = new XMLHttpRequest();
    const startTime = Date.now();
    xhr.open("GET", "https://ucb2d818b25a7f794d8080ca2ce9.dl.dropboxusercontent.com/cd/0/get/B6BkJPhkizTx4-g_LAHSoCEWrALUmO456C8ohna255hFj5hi241H8DnDw-Td7r-2CAZ4ZuDM_gILUOzNc2c21SKIHVGovEAH-MX-nvU3GNUUgjRs7pimwGwKgKi5f7-UDBOdL1EUDMQFf9ieNNGcGEeTKUX4HnHba4dZs92cHc6QYBahY4fFvfiDdswJnXrX6Qw/file#", true);
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
