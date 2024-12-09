// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// Carousel Functionality
let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".carousel-control.prev");
const nextBtn = document.querySelector(".carousel-control.next");

const updateCarousel = () => {
  items.forEach((item, index) => {
    item.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
  });
};

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

// Contact Form (Using EmailJS)
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  Email.send({
    SecureToken: "YOUR_SECURE_TOKEN",
    To: "recipient@example.com",
    From: formData.get("email"),
    Subject: "Portfolio Contact Form",
    Body: `Name: ${formData.get("name")}<br>Message: ${formData.get("message")}`,
  }).then((message) => alert("Message Sent Successfully!"));
});
