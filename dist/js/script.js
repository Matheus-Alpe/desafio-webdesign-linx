document.querySelectorAll('.due-date__conclude').forEach(el => {
    el.addEventListener('click', function () {
        this.classList.toggle('active');
    });
});