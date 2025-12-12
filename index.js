
function sendMail() {
  let parms = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    phone: document.getElementById("Phone").value,
    subject: document.getElementById("subject").value,
    mess: document.getElementById("Message").value,
  };

  emailjs.send("service_5ep5fgs", "template_t9ay0y6", parms).then(function(res) {
    // Create and display the success message
    const successMessage = document.createElement("div");
    successMessage.classList.add("alert", "alert-success", "alert-dismissible", "fade", "show");
    successMessage.role = "alert";
    successMessage.textContent = "Your message has been sent successfully. We'll get back to you shortly!";
    
    // Add a close button to the success message
    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.classList.add("btn-close");
    closeButton.setAttribute("data-bs-dismiss", "alert");
    successMessage.appendChild(closeButton);
    
    // Append the success message to the form or body
    document.querySelector(".Contact").prepend(successMessage);
    
    // Reset the form fields
    document.querySelector("form").reset();
    
    // Optionally, disable the submit button (if you want to prevent multiple submissions)
    document.querySelector("button[type='submit']").disabled = true;
    
  }).catch(function(error) {
    // Handle errors (optional)
    alert("Oops! Something went wrong. Please try again later.");
  });
}
document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const residentialSlides = document.querySelectorAll('#residential img');
  const commercialSlides = document.querySelectorAll('#commercial img');
  const totalSlides = Math.min(residentialSlides.length, commercialSlides.length);

  function showSlides(index) {
    residentialSlides.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
    commercialSlides.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlides(currentIndex);
  }

  setInterval(nextSlide, 2000);
});



const faqs = document.querySelectorAll('.faq-question');
faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
    const answer = faq.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});
   