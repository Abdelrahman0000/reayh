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
