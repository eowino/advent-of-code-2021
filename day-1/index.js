// @ts-check

// https://adventofcode.com/2021/day/1

const data = require('fs').readFileSync('./data.txt', 'utf8');
const measurements = data.split('\n').map(Number);
let increasingSum = 0;

measurements.forEach((depth, index) => {
    const prevDepth = measurements[index - 1];
    if (prevDepth != null && depth > prevDepth) {
        increasingSum += 1
    }
});

console.log(increasingSum);