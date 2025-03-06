document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector(".heading");
    const mainContainer = document.querySelector(".main"); // Target scrolling element
    const moon = document.querySelector("#moon"); // Select the moon element

    let moonClicked = false; // Track if moon is clicked

    // Toggle moonClicked on each click
    moon.addEventListener("click", function () {
        moonClicked = !moonClicked; // Toggle between true and false
    });

    mainContainer.addEventListener("scroll", function () {
        if (mainContainer.scrollTop > 80 && moonClicked) {
            heading.style.color = "white";  
        } else if (mainContainer.scrollTop > 80) {
            heading.style.color = "#000"; 
        } else {
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
    const main = document.querySelector('.main') 
    const banner = document.querySelector('.banner_whyus') 
    const banner2 = document.querySelector('.our_gallary_section')
    const features= document.querySelector('.features')
    const why= document.querySelector('.why_text')

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
        main.classList.toggle('dark')
        banner.classList.toggle('dark')
        banner2.classList.toggle('dark')
        features.classList.toggle('dark')
        why.classList.toggle('dark')
    });
});

