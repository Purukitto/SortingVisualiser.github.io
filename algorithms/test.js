let values = [];
let i = 0;
let j = 0;
let w = 10;

function setup() {
    createCanvas(windowWidth - 16, windowHeight - 65);
    values = new Array(floor(width / w));
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height);
    }
    frameRate(15);
}

function draw() {
    background(51);
    if (i < values.length - 1) {
        var min = i;
        for (var j = i; j < values.length; j++) {
            if (values[j] < values[min]) min = j;
        }
        swap(values, i, min);
    } else {
        console.log("finished");
        noLoop();
    }
    i++;

    for (let i = 0; i < values.length; i++) {
        noStroke();
        fill(255);
        rect(i * w, height - values[i], w, values[i]);
    }
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}