// Scroll to section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Handle Love Message Form Submission
const form = document.getElementById("message-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const message = document.getElementById("message").value;
    if (message) {
        // Redirect to WhatsApp with the message
        const phoneNumber = "6283821115236";
        const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(waLink, '_blank');
    }
});
