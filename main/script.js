$(document).ready(function () {

  $("#firstPhoto").hover(function () {
    $("#desc").text("first");
    $("#bar1").css("background-color", "#fff");
    $("#bar2").css("background-color", "transparent");
    $("#secondPhoto").css("opacity", "0.5");
    $("#firstPhoto").css("opacity", "1");
  });

  $("#secondPhoto").hover(function () {
    $("#desc").text("second");
    $("#bar2").css("background-color", "#fff");
    $("#bar1").css("background-color", "transparent");
    $("#firstPhoto").css("opacity", "0.5");
    $("#secondPhoto").css("opacity", "1");
  });

  $(".reset").mouseout(function () {
    $("#desc").text("Starter text");
    $("#bar1").css("background-color", "transparent");
    $("#bar2").css("background-color", "transparent");
    $("#firstPhoto").css("opacity", "1");
    $("#secondPhoto").css("opacity", "1");
  })

});
