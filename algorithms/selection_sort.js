let values = [];
let i = 0;
let j = 0;
let w = 10;
let states = [];

function setup() {
    createCanvas(windowWidth - 16, windowHeight - 65);
    values = new Array(floor(width / w));
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height);
        states[i] = -1;
    }
    selectionSort(values, values.length);
}

async function selectionSort(arr, n) {
    var min_idx;
    for (i = 0; i < n - 1; i++) {
        min_idx = i;
        states[min_idx] = 0;
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                states[min_idx] = -1;
                states[j] = 0;
                min_idx = j;
            }
        }
        await swap(arr, min_idx, i);
        states[min_idx] = -1;
    }
}

function draw() {
    background(51);

    for (let i = 0; i < values.length; i++) {
        noStroke();
        if (states[i] == 0) {
            fill('#d23941');
        } else if (states[i] == 1) {
            fill('#39d2ca');
        } else {
            fill(255);
        }
        rect(i * w, height - values[i], w, values[i]);
    }
}

async function swap(arr, a, b) {
    await sleep(5);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}