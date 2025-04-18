//banner
document.addEventListener("DOMContentLoaded", () => {
    const bannerImg = document.getElementById("banner-img");
  
    const originalSrc = "art/banner.png";
    const hoverSrc = "art/welcome.png"; // change this to your second image path
  
    bannerImg.addEventListener("mouseenter", () => {
      bannerImg.src = hoverSrc;
    });
  
    bannerImg.addEventListener("mouseleave", () => {
      bannerImg.src = originalSrc;
    });
  });
  
  
//form  
    

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("message-form");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const purpose = document.querySelector("input[name='purpose']:checked");

      if (!name || !email || !message || !purpose) {
        alert("Please fill in all fields before submitting.");
        return;
      }

      document.getElementById("preview-name").textContent = name;
      document.getElementById("preview-email").textContent = email;
      document.getElementById("preview-purpose").textContent = purpose.value;
      document.getElementById("preview-message").textContent = message;

      
      // Trigger confetti 🎉
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      // Optional: Reset form
      // form.reset();
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#dynamic-title", {
      strings: ["Pixel Magician", "Design Dreamer", "Digital Artist"],
      speed: 80,
      breakLines: false,
      loop: true,
      deleteSpeed: 50,
      nextStringDelay: 1000,
    }).go();
  });