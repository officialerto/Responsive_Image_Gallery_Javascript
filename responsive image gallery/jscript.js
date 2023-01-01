$(document).ready(function () {
  $(".grid-item").each(function () {
    var itemTitle = $(".grid-item-title");

    // Add a class on mouse enter in the grid-item
    $(this).on("mouseenter", function () {
      if ($(this).data("title")) {
        itemTitle.html("<span>" + $(this).data("title") + "</span>");
        itemTitle.addClass("visible");
      }

      //  Move title on mouse move
      $(document).on("mousemove", function (e) {
        itemTitle.css({
          left: e.clientX - 10,
          top: e.clientY + 25,
        });
      });
    });

    // Remove Class on mouse leave from grid-item
    $(this).on("mouseleave", function () {
      itemTitle.removeClass("visible");
    });
  });
});
