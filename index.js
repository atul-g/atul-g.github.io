
// to make the sun and intro text dissapear after some amount of scroll

$(document).scroll(function() {
    var y = $(this).scrollTop();
    let screenWidth = $(window).width();

    if (y > 370) {
        $('.sun').fadeOut();
        $(".intro-text").fadeOut();
    } else {
        $('.sun').fadeIn();
        $(".intro-text").fadeIn();
    }
    //console.log(y);
    

    if(screenWidth <=700) {
    if(y>1300) {
        $("#dynamic-background").css("background-color", "black");
        $("#dynamic-background").css("color", "white");

    }
    else {
        $("#dynamic-background").css("background-color", "rgb(145, 198, 86)");
        $("#dynamic-background").css("color", "black");
    }
    }

    else {

    if(y>1700) {
        $("#dynamic-background").css("background-color", "black");
        $("#dynamic-background").css("color", "white");

    }
    else {
        $("#dynamic-background").css("background-color", "rgb(145, 198, 86)");
        $("#dynamic-background").css("color", "black");
    }

    }


    //moon animation:
    if(screenWidth <= 950) {
        if(y>2300) {
            document.getElementById("moon").classList.add("moon-rise");
        }  
    }

    else {
        if(y>2800) {
            document.getElementById("moon").classList.add("moon-rise");
        }
    }

});
