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
            line(i, height, i, height - values[i]);
            stroke(235, 70, 52);
        }
    }