const text = "My viewers on Twitch are the best!!";

let index = 0;

function writeText() {
    document.getElementById("demo").innerHTML = text.slice(0, index);

    index++;

    if (index > text.length) {
        index = 0;
    }
}

setInterval(writeText, 100);