document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector(".heading");
    const mainContainer = document.querySelector(".main");
    const moon = document.querySelector("#moon"); 

    
    let moonClicked = false; 

    
    moon.addEventListener("click", function () {
        moonClicked = !moonClicked; 
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
}, { threshold: 0.5 }); // starts at 50% vis

// Attach observer to each counter element
counts.forEach(counter => {
    observer.observe(counter);
});


// hamburger

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const cross= document.getElementById("cross");
    const line= document.getElementById("line");
    const moon= document.getElementById("moon");
    const nav = document.getElementById('nav');
    const leftNav = document.querySelector('.leftnav');
    const rightNav = document.querySelector('.search');  
    const main = document.querySelector('.main') 
    const banner = document.querySelector('.banner_whyus') 
    const banner2 = document.querySelector('.our_gallary_section')
    const features= document.querySelector('.features')
    const aboutToggle = document.getElementById("about_toggle")
    

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active"); // Show/hide menu
        cross.classList.toggle("active");
        line.classList.toggle("active");
        hamburger.classList.toggle('active')
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
    });

    // about page toggle

    aboutToggle.addEventListener("click", function(){
        main.classList.add('ab_pg');
        aboutToggle.style.color = "#ec1944"; 
        
    });
});

