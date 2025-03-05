console.log("main.js loaded successfully");

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded");

    const heading = document.querySelector(".heading");
    const mainContainer = document.querySelector(".main"); // Target the correct scrolling element

    console.log("Heading element:", heading);
    console.log("Main container:", mainContainer);

    if (!heading) {
        console.error("Heading element not found! Check your HTML structure.");
        return;
    }

    if (!mainContainer) {
        console.error("Main container not found! Check if .main exists.");
        return;
    }

    mainContainer.addEventListener("scroll", function () { // Attach scroll event to .main
        console.log("Scroll event detected. Scroll position:", mainContainer.scrollTop);

        if (mainContainer.scrollTop > 80) {
            heading.style.color = "#000"; // Change to black when scrolling down
        } else {
            heading.style.color = "#ec1944"; // Change back to red when at top
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



