document.addEventListener("DOMContentLoaded", function () {
    const skillProgressBars = document.querySelectorAll(".skill-progress");

    skillProgressBars.forEach(bar => {
        bar.dataset.width = bar.style.width;
        bar.style.width = "0%";
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                bar.style.width = bar.dataset.width;
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });
    skillProgressBars.forEach(bar => {
        observer.observe(bar);
    });
});
