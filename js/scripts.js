$(document).ready(function(){
  $("#img1").click(function(){
    $("#img1").toggle();
    $("#pgh1").toggle();
  })
  $("#pgh1").click(function(){
    $("#pgh1").toggle();
    $("#img1").toggle();
  })
  $("#img2").click(function(){
    $("#img2").toggle();
    $("#pgh2").toggle();
  })
  $("#pgh2").click(function(){
    $("#pgh2").toggle();
    $("#img2").toggle();
  })
  $("#img3").click(function(){
    $("#img3").toggle();
    $("#pgh3").toggle();
  })
  $("#pgh3").click(function(){
    $("#pgh3").toggle();
    $("#img3").toggle();
  })
})

function response(){
  var userName = document.getElementById("name").value;
  alert(userName + " we have recieved your message. Thank you for reaching out to us.");
}
