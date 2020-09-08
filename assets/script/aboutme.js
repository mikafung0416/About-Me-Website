// close the nav list after clicking the link
 $(function(){ 
    var navMain = $("#navbarNav");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});

// Gallery
// when hovering over photo
// 1. photo is enlarged
// 2. caption of that targeted photo is shown
// 3. bg-color of the targeted photo is changed
for (let i = 0; i < 4; i++) {
    $('.photo').eq(i).hover(function(){
        $('.photo').eq(i).width(350);
        $('.photo').eq(i).height(350);
        $('.word').eq(i).css('display', 'block');
        $('.colour-box').eq(i).css('background-color', '#DDA6C6');
}, function(){
        $('.photo').eq(i).width(300);
        $('.photo').eq(i).height(300);
        $('.word').eq(i).css('display', 'none');
        $('.colour-box').eq(i).css('background-color', '#CD7AAA');
})
}

// My Mottos
// getting answers randomly
const answer = [
    {ans1: 'Every cloud has a silver lining!'},
    {ans2: 'Sleep is definitely the solution to everything.'},
    {ans3: 'You\'ll cross the bridge when you got to it.'},
    {ans4: 'The sun will rise and we will try again.'},
    {ans5: 'If it doesn\'t matter, get rid of it.'},
    {ans6: 'The best is yet to come.'},
    {ans7: 'Do whatever you feel happy about!'},
    {ans8: 'Don\'t worry be happy :\)'}
]
// getting an array of answer strings
let answerList = answer.map(obj => Object.values(obj));
// initialize output
let output = 0;
// creating a function to get a random answer by using a random number as an index of the array
// revealedAns (i.e. the random number)
function randomAns(revealedAns) {
    switch (revealedAns) {
        case 0:
            output = answerList[0];
            break;
        case 1:
            output = answerList[1];
            break;
        case 2:
            output = answerList[2];
            break;
        case 3:
            output = answerList[3];
            break;
        case 4:
            output = answerList[4];
            break;
        case 5:
            output = answerList[5];
            break;
        case 6:
            output = answerList[6];
            break;
        default:
            output = answerList[7];
            break;
    }
}

// showing the answers in the div and changing the bg-color of the div
document.getElementById('ask').onclick = function change() {
    // obtain the random number every time the button is clicked so the answer can be altered every time 
    let revealedAns = Math.floor(Math.random() * 8);
    // run the function to get the output
    randomAns(revealedAns);
    document.getElementById('answer-box').innerText = output;
    document.getElementById('answer-box').style.backgroundColor = '#91F9E5';
}
// 'refresh' button
document.getElementById('button-refresh').onclick = function refresh() {
    document.getElementById('answer-box').style.backgroundColor = '#000';
}

// Contact Me
// headshake when it's hovered
$('.icon').on('mouseenter', function() {
    $(this).addClass('animate__animated animate__headShake');
})

$('.icon').on('mouseleave', function() {
    $(this).removeClass('animate__animated animate__headShake');
})