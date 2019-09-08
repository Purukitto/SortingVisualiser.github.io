//DOSE NOT WORK

let values = [];
let algo = "Selection Sort";
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
    background(50);
    for (i = 0; i < values.length - 1; i++) {
        min = i;
        for (j = i + 1; j < values.length; j++) {
            if (values[j] < values[min]) {
                min = j;
            }
            swap(values, min, i);
        }
    }

    for (let i = 0; i < values.length; i++) {
        stroke(500);
        line(i, height, i, height - values[i]);
    }
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}