const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-250px';
    }
});
