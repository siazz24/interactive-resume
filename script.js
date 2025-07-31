// Typewriter Effect
    let i = 0;
    const text = "Hi, I'm Ananya Singh";
    function typeWriter() {
      if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    document.getElementById("typewriter").innerHTML = "";
    typeWriter();

    // Toggle Theme
    document.getElementById("toggle-theme").addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
    // Initialize EmailJS with your Public Key
(function () {
  emailjs.init("zBjtEGBCLUH6JLzkd"); // ✅ Your actual public key
})();

// Handle form submission
function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm("service_5j4ra8b", "template_3yuxbje", "#contact-form")
    .then(() => {
      document.getElementById("response-msg").innerText = "✅ Message sent successfully!";
      document.getElementById("contact-form").reset();
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      document.getElementById("response-msg").innerText = "❌ Something went wrong. Try again later.";
    });
}

// Attach event listener when DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", sendEmail);
});

    