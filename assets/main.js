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
startTimer(60* 9.59, $('.timeLeft'));


var winnername = document.getElementById("winner_name");
var winnerdate = document.getElementById("winner_date");
var winner_name = ["Shxny_Sunshine", "DamienR911", "mikedevil71", "SkullGamerRishi", "McYeeter22", "Badboy21h", "Jeremy"];
var winner_date = ["1 min ago", "26 secs ago", "3 min ago", "11 secs ago", "2 min ago", "8 secs ago", "58 secs ago"];
var winner_units = ["5000", "8000", "12000"];
var counter = 0;
var inst = setInterval(change, 6000);

function change() {
    console.log(counter)
    $(".custom-social-proof").stop().slideToggle(150);
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