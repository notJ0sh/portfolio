console.log("Script loaded successfully!");

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // Only act if it's a link to an ID (like #projects)
            if (targetId.startsWith('#') && targetId.length > 1) {
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault(); // This stops the "instant jump"

                    const navbar = document.querySelector('.navbar');
                    const navHeight = navbar ? navbar.offsetHeight : 0;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
