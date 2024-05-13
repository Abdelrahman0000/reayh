///////////////nav

$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".small-nav").toggleClass("show");
  });
});

///////////////chane lang

// Select the language toggle link
var langToggle = document.getElementById("langToggle");

// Add click event listener to the language toggle link
langToggle.addEventListener("click", function (event) {
  // Prevent default link behavior
  event.preventDefault();

  // Toggle the direction of HTML
  var htmlDir = document.documentElement.getAttribute("dir");
  if (htmlDir === "rtl") {
    document.documentElement.setAttribute("dir", "ltr");
    langToggle.textContent = "Ar";
  } else {
    document.documentElement.setAttribute("dir", "rtl");
    langToggle.textContent = "En";
  }
});

////////////////modal
// Function to hide the first modal and show the second modal
function hideFirstModalAndShowSecondModal() {
  var firstModal = document.getElementById("firstModal");
  var secondModal = document.getElementById("secondModal");

  // Remove "show" class and add display: none inline style to hide the first modal
  firstModal.classList.remove("show");
  firstModal.style.display = "none";

  // Show the second modal
  var secondModalInstance = new bootstrap.Modal(secondModal);
  secondModalInstance.show();

  // Remove the backdrop element
  var backdrop = document.querySelector(".modal-backdrop");
  backdrop.parentNode.removeChild(backdrop);
}

// Function to hide the second modal and show the third modal
function hideSecondModalAndShowThirdModal() {
  var secondModal = document.getElementById("secondModal");
  var thirdModal = document.getElementById("thirdModal");

  // Remove "show" class and add display: none inline style to hide the second modal
  secondModal.classList.remove("show");
  secondModal.style.display = "none";

  // Show the third modal
  var thirdModalInstance = new bootstrap.Modal(thirdModal);
  thirdModalInstance.show();

  // Remove the backdrop element
  var backdrop = document.querySelector(".modal-backdrop");
  backdrop.parentNode.removeChild(backdrop);
}

// Function to hide the third modal
function hideThirdModal() {
  var thirdModal = document.getElementById("thirdModal");

  // Remove "show" class and add display: none inline style to hide the third modal
  thirdModal.classList.remove("show");
  thirdModal.style.display = "none";

  // Remove the backdrop element
  var backdrop = document.querySelector(".modal-backdrop");
  backdrop.parentNode.removeChild(backdrop);
}

/////////////////readmore btn
function toggleDescription() {
  var description = document.getElementById("description");
  var button = document.querySelector(".readmore");
  if (description.classList.contains("expanded")) {
    description.classList.remove("expanded");
    //  button.textContent = "Read More";
    button.querySelector("svg").style.transform = "rotate(0deg)";
  } else {
    description.classList.add("expanded");
    // button.textContent = "Read Less";
    button.querySelector("svg").style.transform = "rotate(180deg)";
  }
}
////////////////////////////////
////////////////////////////////gallery swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4.2,
  spaceBetween: 30,
  loop: true, // Add this line to enable infinite loop
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
///////////////////////////// modal in about
document.addEventListener("DOMContentLoaded", function () {
  // Get Join Us button
  var joinUsBtn = document.getElementById("joinUsBtn");

  // Add click event listener for Join Us button
  joinUsBtn.addEventListener("click", function () {
    // Show the first modal
    document.getElementById("firstModal").classList.add("show");
    document.body.classList.add("modal-open");
    document.getElementsByClassName("modal-backdrop")[0].style.display =
      "block";
  });

  // Get all navLinks inside first modal
  var navLinks = document.querySelectorAll("#firstModal .navLink");

  // Add click event listener for navLinks inside first modal
  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function () {
      // Hide the first modal
      document.getElementById("firstModal").classList.remove("show");
      document.body.classList.remove("modal-open");
      document.getElementsByClassName("modal-backdrop")[0].style.display =
        "none";

      // Show the second modal
      document.getElementById("secondModal").classList.add("show");
      document.body.classList.add("modal-open");
      document.getElementsByClassName("modal-backdrop")[0].style.display =
        "block";
    });
  });

  // Add click event listener for navLinks inside second modal
  // Implement the transition to the third modal similarly
});
///////////////////
$(document).ready(function () {
  $("#datepicker,#expire").datepicker({
    format: "yyyy-mm-dd",
    autoclose: true,
  });
});
//////////////
$(".timepicker").timepicker({
  showMeridian: false, // 24-hour format
  defaultTime: false, // no default time
});
///////////////////// nav avatar

$(document).ready(function () {
  // Create an image element
  var img = $("<img>");

  // Add src and alt attributes to the image
  img.attr("src", "../assets/images/BG1.png");
  img.attr("alt", "Avatar");

  // Add the 'avatar' class to the image
  img.addClass("avatar-top");

  // Append the image to the div with class 'small-nav'
  $(".small-nav").append(img);
});
//////////////////////////////

$(document).ready(function () {
  // Create an image element
  var footerimg = $("<img>");

  // Add src and alt attributes to the image
  footerimg.attr("src", "../assets/images/BG2.png");
  footerimg.attr("alt", "Avatar");

  // Add the 'avatar' class to the image
  footerimg.addClass("avatar-bottom");

  // Append the image to the div with class 'small-nav'
  $("footer").append(footerimg);
});

/////////////////////////////form parts
function showContent(contentId) {
  // Hide all form content
  var contents = document.querySelectorAll(".form-content");
  contents.forEach(function (content) {
    content.classList.remove("active");
  });

  // Hide all form types
  var formTypes = document.querySelectorAll(".form-type");
  formTypes.forEach(function (formType) {
    formType.classList.remove("active");
  });

  // Show the selected content and mark the selected form type as active
  var contentToShow = document.getElementById(contentId);
  contentToShow.classList.add("active");

  var associatedformType = document.querySelector(
    ".form-type[onclick=\"showContent('" + contentId + "')\"]"
  );
  if (associatedformType) {
    associatedformType.classList.add("active");
  }
}
/////////////////////// signup form switch

function showSign(contentId) {
  // Hide all sign content
  var contents = document.querySelectorAll(".sign-content");
  contents.forEach(function (content) {
    content.classList.remove("active");
  });

  // Hide all sign types
  var signTypes = document.querySelectorAll(".sign-type");
  signTypes.forEach(function (signType) {
    signType.classList.remove("active");
  });

  // Show the selected content and mark the selected sign type as active
  var contentToShow = document.getElementById(contentId);
  contentToShow.classList.add("active");

  var associatedsignType = document.querySelector(
    ".sign-type[onclick=\"showSign('" + contentId + "')\"]"
  );
  if (associatedsignType) {
    associatedsignType.classList.add("active");
  }
}
