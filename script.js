var random = proverbs[Math.floor(Math.random()*proverbs.length)];

var password = random

var length = password.length

var password1 = "";


var mistakes = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");


for (i = 0; i < length; i++) {

    if (password.charAt(i) == " ") {
        password1 = password1 + " ";
    } else if (password.charAt(i) == ",") {
        password1 = password1 + ","
    } else {
        password1 = password1 + "-";
    }

    }






function displaySentence() {
    document.getElementById("sentence").innerHTML = password1;
}

displaySentence()



var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function letters() {
    var content = "";

    for (i = 0; i <= 25; i++) {
        var element = "let" + i;
        content = content + '<div class="letter" onclick="check(' + i + ')" id="' + element + '">' + alphabet[i] + '</div>';
    }
    document.getElementById("letters").innerHTML = content;

}
letters()

String.prototype.setMark = function (place, mark) {
    if (place > this.length - 1) {
        return this.toString();
    } else {
        return this.substr(0, place) + mark + this.substr(place + 1)
    }
}

function check(num) {

    var goodLetter = false

    for (i = 0; i < length; i++) {
        if (password.charAt(i) == alphabet[num]) {
            password1 = password1.setMark(i, alphabet[num]);
            goodLetter = true;

        }
    }
    var elem = "let" + num
    if (goodLetter == true) {
        document.getElementById(elem).classList.add("goodLt");
        yes.play()
    } else {
        document.getElementById(elem).classList.add("badLt");
        document.getElementById(elem).setAttribute("onclick", ";");
        mistakes++;
        var picture = "img/s" + mistakes + ".jpg"
        document.getElementById("hang").innerHTML = '<img src="' + picture + '">'

        no.play();

    }
    if (password1 == password) {
        document.getElementById("letters").innerHTML = "Yeah You guessed the password:<br><br>" + password + '<br><br><span class="reset" onclick="location.reload()">Play again</span>'
    }
    if (mistakes >= 9) {
        document.getElementById("letters").innerHTML = 'You lose<br><br><span class="reset" onclick="location.reload()">Play again</span>'
    }
    displaySentence();
}
