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
