let values = [];
let i = 0;
let j = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    values = new Array(width);
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height);
    }
}

function draw() {
    background(255);
    i = 0;
    if (i < values.length) {
        for (let j = 0; j < values.length - i - 1; j++) {
            if (values[j] > values[j + 1]) {
                swap(values, j, j + 1);
            }
        }
    } else {
        console.log("finished");
        noLoop();
    }
    i++;


    for (let i = 0; i < values.length; i++) {
        stroke(235, 70, 52);
        line(i, height, i, height - values[i]);
    }
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}