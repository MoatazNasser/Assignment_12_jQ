setDuration("Jan 5, 2023 15:00:00");

//-------------------------------------------------
// animante left sidebar
var currentLeft = $(".side").outerWidth();
$("#sideBar").css("left", -currentLeft);

$(".btnOpen").click(function () {
  var currentLeft = $(".side").outerWidth();
  //   alert(currentLeft);
  if ($("#sideBar").css("left") == "0px") {
    $("#sideBar").animate({ left: -currentLeft }, 500);
  } else {
    $("#sideBar").animate({ left: "0px" }, 500);
    // console.log(currentLeft);
  }
});
$(".close").click(function () {
  $("#sideBar").animate({ left: -currentLeft }, 500);
});
//---------------------------------------------

//control details section
$(".details").slideUp(10);
$(".details").first().slideDown(10);

$(".btnSinger").click(function () {
  $(".details").slideUp(500);
  if ($(this).siblings().css("display") != "none") {
    $(this).siblings().slideUp(500);
  } else {
    $(this).siblings().slideDown(500);
  }
});

//------------------------------------------------

function setDuration(yourDate) {
  // Set the date we're counting down to
  var countDownDate = new Date(yourDate).getTime();
  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    $(".days").text(days);
    $(".hours").text(hours);
    $(".mins").text(minutes);
    $(".secs").text(seconds);

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      $(".days").text("D");
      $(".hours").text("H");
      $(".mins").text("M");
      $(".secs").text("S");
    }
  }, 1000);
}
//------------------------------------------------------

// 100 character limit
var message = document.getElementById("message");
var currentMessage = "";
$("#message").keyup(function (e) {
  //   console.log($("#message").val().length);

  if ($("#message").val().length > 99) {
    currentMessage = $("#message").val().slice(0, 100);
    message.value = currentMessage;
    $("#alertMes").html(`<p>Your Available Character Finished</p>`);
  } else {
    var count = 100 - $("#message").val().length;
    $("#alertMes").html(`<span id="count">${count}</span> Character
    only`);
  }
});
//----------------------------------------------------

// scroll to sections
$("li").click(function () {
  let secName = `#${$(this).text()}`;
  //   console.log(secName);
  let secOffset = $(secName).offset().top;
  //   console.log(secOffset);
  $("html,body").animate({ scrollTop: secOffset }, 200);
});
