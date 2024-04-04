// toggle icon navbar


// scroll sections
window.onscroll = () =>{
    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar a");
    for (const link of navLinks) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offset = targetSection.offsetTop;
                window.scrollTo({
                    top: offset - 100, // Adjust the offset as needed
                    behavior: "smooth",
                });
            }
        });
    }

    // Read More button animation
    const readMoreButton = document.querySelector(".button");

    readMoreButton.addEventListener("click", function () {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            const offset = aboutSection.offsetTop;
            window.scrollTo({
                top: offset - 100, // Adjust the offset as needed
                behavior: "smooth",
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Send an email using a simulated request (client-side only)
        sendEmail(name, email, message);
    });

    function sendEmail(name, email, message) {
        // Replace the following line with actual code to send an email
        // You'll need to use a server-side script (e.g., PHP) to send emails
        // This is just a simulated example.
        alert("Your message has been sent to honorekayumba6@gmail.com");
    }
});
