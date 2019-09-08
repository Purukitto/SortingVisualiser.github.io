let values = [];
let i = 0;
let j = 0;
let w = 10;

function setup() {
    createCanvas(windowWidth, windowHeight);
    values = new Array(floor(width / w));
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height);
    }
    frameRate(15);
}

function draw() {
    background(51);
    if (i < values.length) {
        let key = values[i];
        let j = i - 1;
        while (j >= 0 && values[j] > key) {
            values[j + 1] = values[j];
            j = j - 1;
        }
        values[j + 1] = key;
    } else {
        console.log("finished");
        noLoop();
    }
    i++;

    for (let i = 0; i < values.length; i++) {
        stroke(0);
        fill(255);
        rect(i * w, height - values[i], w, values[i]);
    }
}