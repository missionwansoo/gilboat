//2023-12-14 update

$(document).ready(function() {

    //loading
    var boxes = $(".loading_box");

    var index = 0;
    var interval = setInterval(function() {
      boxes.eq(index).addClass("on").delay(100).queue(function(next) {
        $(this).removeClass("on");
        next();
      });

      index++;

      if (index === boxes.length) {
        clearInterval(interval);
      }
    }, 100);

    setTimeout(function() {
        $("#loading").removeClass("on");
    }, 1300);
    setTimeout(function() {
        $("#loading").addClass("off");
    }, 2000);

    //hand_rotation
    var rotatingImage = $(".hand_rotation");
    var isHovered = false;

    $(document).on("mousemove", function(event) {
        if (!isHovered) {
            // Calculate the angle based on the mouse position
            var mouseX = event.pageX;
            var mouseY = event.pageY;
            var imageX = rotatingImage.offset().left + rotatingImage.width() / 2;
            var imageY = rotatingImage.offset().top + rotatingImage.height() / 2;

            var radians = Math.atan2(mouseY - imageY, mouseX - imageX);
            var angle = radians * (180 / Math.PI);

            // Limit the angle to the range [-180, 180]
            angle = (angle + 180 + 80) % 360 - 180;

            // Limit the angle to the range [-180, 0] to rotate only up to 180 degrees
            angle = Math.max(-90, Math.min(90, angle));

            // Rotate the image
            rotatingImage.css("transform", "rotate(" + angle + "deg)");
        }
    });

    //hand_rotation hover
    $('.hand_rotation').hover(
        function() {
            isHovered = true;
            $(this).removeClass("on");
            $(this).css("transition", "none");
        },
        function() {
            isHovered = false;
            $(this).addClass("on");
            $(this).css("transition", "transform 0s");
        }
    );

    //main_deco
    setTimeout(function() {
        $(".main_deco a .img_gif").removeClass("on");
        $(".main_deco a .img_png").addClass("on");
    }, 3000);

    //main_deco a hover
    $('.main_deco a').hover(
        function() {
            $(this).find(".img_gif").addClass("on");
            $(this).find(".img_png").removeClass("on");
        },
        function() {
            $(this).find(".img_gif").removeClass("on");
            $(this).find(".img_png").addClass("on");
        }
    );
	
});
