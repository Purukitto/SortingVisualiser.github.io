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
    insertionSort(values, values.length);
}

async function insertionSort(arr, n) {
    if (n <= 1)
        return;
    await insertionSort(arr, n - 1);
    var last = arr[n - 1];
    j = n - 2;
    while (j >= 0 && arr[j] > last) {
        states[j] = 0;
        states[last] = 0;
        await move(arr, j, last);
        states[j] = -1;
        states[last] = -1;
        j--;
    }
    arr[j + 1] = last;
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

async function move(arr, j, last) {
    await sleep(5);
    arr[j + 1] = arr[j];
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}