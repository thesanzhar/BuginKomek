// Menu Burger
$(document).ready(function () {
  $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
});

$("#demo1").maskMoney({thousands:' ', decimal:',', allowZero: false, allowEmpty: true, suffix: ' ₸'});

var header__lang = document.getElementById("header__lang");
var btns = header__lang.getElementsByClassName("header__lang_items");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active_lang");
  current[0].className = current[0].className.replace(" active_lang", "");
  this.className += " active_lang";
  });
}

