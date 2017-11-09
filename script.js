/*jslint browser: true, devel: true*/
/*global $, jQuery, alert*/

function flip(x){
  x.style.display = "none";
};
function openQuestion(x){
  x.style.display = "block";
}
function showAnswer(a,button){
  button.style.display = "none";
  a.style.display = "block";
}
