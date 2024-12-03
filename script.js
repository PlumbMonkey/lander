// JavaScript for Plumbmonkey Music Landing Page

document.addEventListener("DOMContentLoaded", function() {
    // Add slight rotation effect to monkeys when hovered
    const monkeys = document.querySelectorAll(".floating-monkey");

    monkeys.forEach(monkey => {
        monkey.addEventListener("mouseenter", () => {
            monkey.style.transform = "rotate(10deg) scale(1.05)";
            monkey.style.transition = "transform 0.3s ease-in-out";
        });

        monkey.addEventListener("mouseleave", () => {
            monkey.style.transform = "rotate(0deg) scale(1)";
            monkey.style.transition = "transform 0.3s ease-in-out";
        });
    });

    // Responsive adjustment for small screens
    const resizeHandler = () => {
        if (window.innerWidth < 600) {
            monkeys.forEach(monkey => {
                monkey.style.width = "100px";
            });
        } else {
            monkeys.forEach(monkey => {
                monkey.style.width = "150px";
            });
        }
    };

    window.addEventListener("resize", resizeHandler);
    resizeHandler();
});


