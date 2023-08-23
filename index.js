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
    showButton.textContent = "Hide Certificate";
  } else {
    hiddenContent.style.display = "none";
    showButton.textContent = "Show Certificate";
  }
});
