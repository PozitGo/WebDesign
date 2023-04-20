/*
var one = "Hello";
console.log(one);

$("#Message").text(one);
$("#Message").fadeOut("slow");
console.info(document.getElementsByClassName("Message").length);

document.getElementsByClassName("Message")[0].style.color = "red";
$(".Message").css("color", "green");
$("body").css("background-color", "black"); 
*/

var text = document.getElementById("test");
text.onclick = function () {
  alert("Привет");
};

var text = document
  .getElementById("test")
  .addEventListener("click", function (event) {
    alert("ку");
  });

text.removeEventListener("click", функция (не анонимная));
