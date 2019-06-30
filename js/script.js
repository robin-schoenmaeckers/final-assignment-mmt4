

$(document).ready(function () { // voer functie uit zodra DOM klaar is

 

    $("#accordion").accordion({ animate: 1200, header: ".accordionwrapper h3", heightStyle: "content" }); // de accordion functie van jQuery UI


    $('#switch').on('click', () => {
        if ($('#switch').prop('checked')) {
            $('body').addClass('dark');
            $('header').addClass('dark');
        } else {
            $('body').removeClass('dark');
            $('header').removeClass('dark');
        }
    });


    $("video").each(function () {
        console.log(this.id);
        var player = videojs(this.id, {
            autoplay: 'muted',
            loop: true
        });

        let geklikt = false;
        $(this).parents(".accordionparagraph").find(".playbutton").click(function () {
            console.log("hallo")
            if (geklikt == false) {
                player.pause();
                geklikt = true;
                $('.play').css({ 'background-image': "url(../img/pause@2x.svg)", 'margin-left': "25%", 'margin-top': "13%", 'height': "60%", 'width': "60%", "background-position-y": "0px" });

            } else {
                player.play();
                geklikt = false;
                $('.play').css({ 'background-image': "url(../img/play@2x.svg)" });
                $('.play').css({ 'margin-left': "0%" });
                $('.play').css({ 'margin-top': "0%" });
                $('.play').css({ 'height': "80%" });
                $('.play').css({ 'width': "auto" });
                $('.play').css({ "background-position-y": "3px" });
            }
        });

        $(this).parents(".accordionparagraph").find(".reloadbutton").click(function () {
            console.log(player.currentTime());
            player.currentTime(0);
        });

        $(this).parents(".accordionparagraph").find(".afgevinkt").click(function () {
            $(this).parents(".accordionwrapper").find(".vinked").css({ "display": "inline" });
        });

    });

    anime.timeline({loop: true})
    .add({
      targets: '.ml8 .circle-white',
      scale: [0, 3],
      opacity: [2, 0],
      easing: "easeInOutExpo",
      rotateZ: 360,
      duration: 2000
    }).add({
      targets: '.ml8 .circle-container',
      scale: [0, 1],
      duration: 2000,
      easing: "easeInOutExpo",
      offset: '-=1000'
    }).add({
      targets: '.ml8 .circle-dark',
      scale: [0, 1],
      duration: 1100,
      easing: "easeOutExpo",
      offset: '-=600'
    }).add({
      targets: '.ml8 .letters-left',
      scale: [0, 1],
      duration: 1600,
      offset: '-=550'
    }).add({
      targets: '.ml8 .bang',
      scale: [0, 1],
      rotateZ: [45, 15],
      duration: 1600,
      offset: '-=1000'
    }).add({
      targets: '.ml8',
      opacity: 0,
      duration: 2000,
      easing: "easeOutExpo",
      delay: 1400
    });
  
  anime({
    targets: '.ml8 .circle-dark-dashed',
    rotateZ: 360,
    duration: 8000,
    easing: "linear",
    loop: true
  });
    

});