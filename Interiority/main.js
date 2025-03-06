document.addEventListener("DOMContentLoaded", function () {

    const heading = document.querySelector(".heading");
    const mainContainer = document.querySelector(".main"); // Target the correct scrolling element

    mainContainer.addEventListener("scroll", function () { // Attach scroll event to .main
        
        if (mainContainer.scrollTop > 80) {
            heading.style.color = "#000"; 
        } 
        if(moon.click){
            heading.style.color ="#fff"
        }
        else {
            heading.style.color = "#ec1944"; 
        }
    });
});

const counts = document.querySelectorAll('.count');
const speed = 100;
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            function update() {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.floor(count + inc);
                    setTimeout(update, 20);
                } else {
                    counter.innerText = target;
                }
            }
            update();
            observer.unobserve(counter); // Stop observing once started
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% visible

// Attach observer to each counter element
counts.forEach(counter => {
    observer.observe(counter);
});


// hamburger

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const cross= document.getElementById("cross");
    const moon= document.getElementById("moon");
    const nav = document.getElementById('nav');
    const leftNav = document.querySelector('.leftnav');
    const rightNav = document.querySelector('.search');   

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active"); // Show/hide menu
        cross.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });

    //mode change
    moon.addEventListener("click", function () {
        nav.classList.toggle('dark')
        leftNav.classList.toggle('dark')
        rightNav.classList.toggle('dark')
        moon.classList.toggle('dark')
    });
});

