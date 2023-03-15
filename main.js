$(document).ready(function (){
  function add() {
    $(".coied").addClass("bounce-effect");
  };
  function remove() {
    $(".coied").removeClass("bounce-effect");
  };

  $(".copy-btn").click(function (){
    $("#textField").select();
    document.execCommand("copy");
    add();
    setTimeout(remove , 800);
  });
});