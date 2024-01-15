$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const item1Input = $("input#item1").val();
    const item2Input = $("input#item2").val();
    const item3Input = $("input#item3").val();

    $(".item1").text(item1Input);
    $(".item2").text(item2Input);
    $(".item3").text(item3Input);

    $("#review").show();
    $("#formOne").hide();


    event.preventDefault()

    })
})