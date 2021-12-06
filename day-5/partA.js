// @ts-check

// https://adventofcode.com/2021/day/5

const data = require('fs').readFileSync('./data.txt', 'utf8').split('\n');
const state = {};

/**
 * returns 
 * [
 *  [[x1, y1], [x2, y2]],
 *  [[x1, y1], [x2, y2]],
 *  ...
 * ]
 */
const gridCoordinates = data.map(line => {
    const [x1y1, x2y2] = line.split(' -> ');
    return [x1y1.split(',').map(Number), x2y2.split(',').map(Number)];
}).filter(array => {
    const [x1y1, x2y2] = array;
    // only consider horizontal and vertical lines: lines where either x1 = x2 or y1 = y2
    return x1y1[0] === x2y2[0] || x1y1[1] === x2y2[1];
});

function updateState(entry) {
    if (state[entry]) {
        state[entry] += 1;
    } else {
        state[entry] = 1;
    }
}

gridCoordinates.forEach(array => {
    const [x1y1, x2y2] = array;
    const diffX = x1y1[0] - x2y2[0];
    const diffY = x1y1[1] - x2y2[1];

    if (diffX !== 0) {
        for (let i = 0; i <= Math.abs(diffX); i++) {
            if (x1y1[0] > x2y2[0]) {
                updateState([x1y1[0] - i, x1y1[1]].join());
            } else {
                updateState([x1y1[0] + i, x1y1[1]].join());
            }
        }
    }
    if (diffY !== 0) {
        for (let i = 0; i <= Math.abs(diffY); i++) {
            if (x1y1[1] > x2y2[1]) {
                updateState([x1y1[0], x1y1[1] - i].join());
            } else {
                updateState([x1y1[0], x1y1[1] + i].join());
            }
        }
    }
});

const result = Object.values(state).reduce((acc, curr) => {
    if (curr > 1) {
        acc += 1
    }
    return acc;
}, 0)

console.log('result:', result)