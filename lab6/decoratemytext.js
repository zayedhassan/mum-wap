window.onload = function () {
    "use strict";
    let time = setInterval(myTimer, 1000);

    function myTimer() {
        let date = new Date();
        document.getElementById("timer").innerHTML = date.toLocaleTimeString();
    }

    function increase() {
        let size = parseInt(document.getElementById("textArea").style.fontSize);
        size += 2;
        document.getElementById("textArea").style.fontSize = size + "pt";
    };

    document.getElementById("bling").onclick = function () {
        if (document.getElementById("bling").checked == true) {
            document.getElementById("textArea").style.fontWeight = "bold";
            document.getElementById("textArea").style.color = "green";
            document.getElementById("textArea").style.textDecoration = "underline";
            document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        } else if (document.getElementById("bling").checked == false) {
            document.getElementById("textArea").style.fontWeight = "normal";
            document.getElementById("textArea").style.textDecoration = "none";
            document.getElementById("textArea").style.color = "black";
            document.body.style.backgroundImage = "none";
        }
    }

    document.getElementById("bd").onclick = function () {

        setTimeout(increase, 500);

    }
}