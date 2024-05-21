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
  $("body").append(img);
});
//////////////////////////////

$(document).ready(function () {
  // Create an image element
  var footerimg = $("<img>");

  // Add src and alt attributes to the image
  footerimg.attr("src", "../assets/images/Our Services.png");
  footerimg.attr("alt", "Avatar");

  // Add the 'avatar' class to the image
  footerimg.addClass("avatar-bottom");

  // Append the image to the div with class 'small-nav'
  $("body").append(footerimg);
});
