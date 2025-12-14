
function sendMail() {
  let parms = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    phone: document.getElementById("Phone").value,
    subject: document.getElementById("subject").value,
    mess: document.getElementById("Message").value,
  };

  emailjs.send("service_5ep5fgs", "template_t9ay0y6", parms)
    .then(() => {
      window.location.href = "success.html";  // Redirect
    })
    .catch(() => {
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
   