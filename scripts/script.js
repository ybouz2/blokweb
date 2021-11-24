// JavaScript Document

var klikMij = document.querySelector("header nav img:first-of-type ");

var change = document.querySelector("header nav ul")
var nav = document.querySelector("header nav")

klikMij.addEventListener("click", function() {
  change.classList.toggle("toon")
  nav.classList.toggle("toon")
});
