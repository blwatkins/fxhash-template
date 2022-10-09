// Sketch Functions

let isSaved;
let number;

function setup() {
    createCanvas(windowWidth, windowHeight);
    isSaved = false;
    number = randomInt(0, 100);
    setFeatures();
}

function draw() {
    fill(0, 0, 255);
    noStroke();
    ellipse(mouseX, mouseY, 50, 50);

    fill(0);
    textSize(50);
    textAlign(CENTER, CENTER);
    text(number, width / 2, height / 2);

    if (!isSaved) {
        fxpreview();
        isSaved = true;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setFeatures() {
    window.$fxhashFeatures = {
        "Ellipse Color": "blue"
    }
}
