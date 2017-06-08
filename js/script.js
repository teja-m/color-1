// 0) RGB Funktion

function rgb(r, g, b) {
    return "rgb(" + r + ", " + g + ", " + b + ")";
};

function randColour(i) {
    var base = Math.max(1, i / 2);
    return rgb( base * Math.floor(Math.random() * 256),
                base * Math.floor(Math.random() * 256),
                base * Math.floor(Math.random() * 256));
}

// 1) Farbe berechnen
// var $i = 1;
// var farbe = randColour($i);

// 1.2) n Farben als fixe liste

var farben = new Array(0, 1, 2, 3, 4, 5, 6);

farben = farben.map(function($i) {
    return randColour($i);
});


// 2) Dokument ferig? -> Farbe setzen
function setColours() {
    var nodes = document.querySelectorAll("[class\^='el-']");
    nodes.forEach(function(el, index) {
        el.style.backgroundColor = randColour(index);
    });

    setTimeout(setColours, 200);
}

window.onload = setColours;