// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

// Check if dark mode was previously enabled in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('active');
    document.getElementById('darkmode').classList.replace('bx-moon', 'bx-sun');
} else {
    document.body.classList.remove('active');
    document.getElementById('darkmode').classList.replace('bx-sun', 'bx-moon');
}

// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
        localStorage.setItem('darkMode', 'enabled'); // Save dark mode preference in localStorage
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
        localStorage.setItem('darkMode', 'disabled'); // Save dark mode preference in localStorage
    }
}

// Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
});
