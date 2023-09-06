var timerStarted = 0;
var $ = window.jQuery;

function startTimer(duration, display) {

    if (timerStarted == 0) {

        timerStarted = 1;

        var timer = duration,
            minutes, seconds;

        setInterval(function() {

            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.text(minutes + ":" + seconds);

            if (--timer < 0) {
              var x = document.getElementsByClassName("timeLeft");
              x[0].innerHTML = "GOING SOON!";
            }

        }, 1000);

    }


}
$('#windows').click(function() {
    $('#windows').attr('class', 'platform platform-active');
    $('#PS4').attr('class', 'platform');
    $('#xBox').attr('class', 'platform');
    $('#iOS').attr('class', 'platfor');
    $('#Android').attr('class', 'platform');
});
$('#PS4').click(function() {
    $('#windows').attr('class', 'platform');
    $('#PS4').attr('class', 'platform platform-active');
    $('#xBox').attr('class', 'platform');
    $('#iOS').attr('class', 'platfor');
    $('#Android').attr('class', 'platform');
});
$('#xBox').click(function() {
    $('#windows').attr('class', 'platform');
    $('#PS4').attr('class', 'platform');
    $('#xBox').attr('class', 'platform platform-active');
    $('#iOS').attr('class', 'platfor');
    $('#Android').attr('class', 'platform');
});
$('#iOS').click(function() {
    $('#windows').attr('class', 'platform');
    $('#PS4').attr('class', 'platform');
    $('#xBox').attr('class', 'platform');
    $('#iOS').attr('class', 'platfor platform-active');
    $('#Android').attr('class', 'platform');
});
$('#Android').click(function() {
    $('#windows').attr('class', 'platform');
    $('#PS4').attr('class', 'platform');
    $('#xBox').attr('class', 'platform');
    $('#iOS').attr('class', 'platfor');
    $('#Android').attr('class', 'platform platform-active');
});
startTimer(60 * 4.7, $('.timeLeft'));


var winnername = document.getElementById("winner_name");
var winnerdate = document.getElementById("winner_date");
var winner_name = ["pippa3213", "PREPPY1LAV6", "LONDYNSWRLD", "25Laurinkaa", "DramyXbells", "Xlea_dk", "leah000999","Kisila","mwnellll","SapphireVivi"];
var winner_date = ["1 min ago", "26 secs ago", "3 min ago", "11 secs ago", "2 min ago", "8 secs ago", "58 secs ago","35 sec ago","15 sec ago","26 sec ago"];
var winner_units = ["5000", "8000", "12000"];
var counter = 0;
var inst = setInterval(change, 6000);



function change() {
    // Array of image sources
    var imgSources = [
        "cdn2.unrealengine.com/Fortnite/redeem-code/1.png",
        "cdn2.unrealengine.com/Fortnite/redeem-code/2.png",
        "cdn2.unrealengine.com/Fortnite/redeem-code/3.png",
        "cdn2.unrealengine.com/Fortnite/redeem-code/4.png",
        "cdn2.unrealengine.com/Fortnite/redeem-code/5.png",
        "cdn2.unrealengine.com/Fortnite/redeem-code/6.png",
        "cdn2.unrealengine.com/Fortnite/redeem-code/7.png",
        "cdn2.unrealengine.com/Fortnite/redeem-code/8.png",
        "cdn2.unrealengine.com/Fortnite/redeem-code/9.png",
        "cdn2.unrealengine.com/Fortnite/redeem-code/10.png",
    ];


    // Get the <img> element by its ID
    var imgElement = document.getElementById("randomImage");

    
    


    
    $(".custom-social-proof").stop().slideToggle(150);
    imgElement.src = imgSources[counter];
    winnername.innerHTML = winner_name[counter];
    winnerdate.innerHTML = winner_date[counter];
    counter++;
    if (counter >= winner_name.length || counter >= winner_date.length) {
        counter = 0;
    }
}
$(".custom-close").click(function() {
    $(".custom-social-proof").stop().slideToggle('slow');
});
