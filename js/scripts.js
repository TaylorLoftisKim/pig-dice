// back end logic

// front end logic
$(document).ready(function()  {
  $("#name form").submit(function(event)  {
    var player1Input = $("input#player1").val();

    $(".player1").text(player1Input);
    $("#show-name").show();
    event.preventDefault();
  });
});
