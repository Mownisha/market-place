$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameIp = $("input#name").val();
    var addressIp = $("input#address").val();
    var productIp= $("#product").val();
    var colorIp = $("input:radio[name=color]:checked").val();

    $(".name").text(nameIp);
    $(".address").text(addressIp);
    $(".product").text(productIp);
    $(".radio").text(colorIp);

    $("#market").show();

    event.preventDefault();
  });
});
