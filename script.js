// Scroll reveal animation
const sections = document.querySelectorAll(".glass");

const reveal = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 120;

        if (sectionTop < triggerPoint) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

console.log("Animations activated 🚀");
