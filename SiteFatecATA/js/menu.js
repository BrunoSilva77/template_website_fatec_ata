var timer;

$(".parent").on("mouseover", function() {
    clearTimeout(timer);
    openSubmenu();
}).on("mouseleave", function() {
    timer = setTimeout(
      closeSubmenu, 5000);
});

function openSubmenu() {
  $(".submenu").addClass("open");
}
function closeSubmenu() {
  $(".submenu").removeClass("open");
}