///////////////nav

$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".small-nav").toggleClass("show");
  });
});

////////////////modal
// احصل على كل علامة تبويب
var tabs = document.querySelectorAll("#tabContainer .navLink");

// اضبط event listener لكل علامة تبويب
tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    // اغلق جميع المودالات المفتوحة
    var openModals = document.querySelectorAll(".modal.show");
    openModals.forEach(function (modal) {
      var modalInstance = bootstrap.Modal.getInstance(modal);
      if (modalInstance) {
        modalInstance.hide();
      }
    });

    // افتح المودال المناسب بناءً على علامة التبويب
    if (tab.getAttribute("href") === "#firstTab") {
      var firstModal = new bootstrap.Modal(
        document.getElementById("firstModal")
      );
      firstModal.show();
    } else if (tab.getAttribute("href") === "#secondTab") {
      var secondModal = new bootstrap.Modal(
        document.getElementById("secondModal")
      );
      secondModal.show();
    } else if (tab.getAttribute("href") === "#thirdTab") {
      var thirdModal = new bootstrap.Modal(
        document.getElementById("thirdModal")
      );
      thirdModal.show();
    }
  });
});

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
/////////////////////////////

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
