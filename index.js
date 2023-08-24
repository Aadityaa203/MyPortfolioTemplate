$(document).ready(function (e) {
  $win = $(window);
  $navbar = $("#header");
  $toggle = $(".toggle-button");
  var width = $navbar.width();
  toggle_onclick($win, $navbar, width);

  // resize event
  $win.resize(function () {
    toggle_onclick($win, $navbar, width);
  });

  $toggle.click(function (e) {
    $navbar.toggleClass("toggle-left");
  });
});

function toggle_onclick($win, $navbar, width) {
  if ($win.width() <= 768) {
    $navbar.css({ left: `-${width}px` });
  } else {
    $navbar.css({ left: "0px" });
  }
}

// Skills (certifications)
const showButton = document.getElementById("showContent");
const hiddenContent = document.getElementById("hiddenContent");

showButton.addEventListener("click", function () {
  if (hiddenContent.style.display === "none") {
    hiddenContent.style.display = "block";
    showButton.textContent = "Hide CIW Certificate";
  } else {
    hiddenContent.style.display = "none";
    showButton.textContent = "Show CIW Certificate";
  }
});

// contact me (form)
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Display an alert with the form data
  const formData = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
  alert(formData);

  // Reset the form
  this.reset();
});