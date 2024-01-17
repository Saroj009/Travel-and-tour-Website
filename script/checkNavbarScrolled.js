document.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar-container');
    if (window.scrollY >= 70) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});
