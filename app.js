function genrateRandom() {
    var text = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {


        color += text[Math.floor(Math.random() * 16)];
    }
    return color;

}

function changeBackground() {
    let colorbg = document.getElementById('color-overlay');
    colorbg.style.backgroundColor = genrateRandom();

}

function changeBgText() {
    let text = document.getElementById("text-bg");
    if (text.innerHTML == "ON THE FLOOR BABY") {
        text.innerHTML = "HIT IT HARD BABY";
        text.style.color = genrateRandom();
    } else if (text.innerHTML == "HIT IT HARD BABY") {
        text.innerHTML = "ROCK THE PARTY BABY";
        text.style.color = genrateRandom();
    } else if (text.innerHTML == "ROCK THE PARTY BABY") {
        text.innerHTML = "ON THE FLOOR BABY";
        text.style.color = genrateRandom();
    }
}

function checkbg() {
    genrateRandom();
    changeBackground();
    changeBgText();

}
setInterval(checkbg, 500);
// console.log(genrateRandom())