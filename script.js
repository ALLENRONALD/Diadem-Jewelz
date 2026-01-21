// Navbar shadow on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
document.addEventListener("DOMContentLoaded", function () {

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("contactName").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const phone = document.getElementById("contactPhone").value.trim();

      const message =
        "Hello Diadem Jewels ✨%0A%0A" +
        "I would like to get in touch.%0A%0A" +
        "👤 Name: " + name + "%0A" +
        "📞 Phone: " + phone + "%0A" +
        "📧 Email: " + email + "%0A%0A" +
        "Please contact me.";

      const whatsappNumber = "917397281997"; // 🔴 REPLACE THIS
      const whatsappURL =
        "https://wa.me/" + whatsappNumber + "?text=" + message;

      window.open(whatsappURL, "_blank");
    });
  }

});
