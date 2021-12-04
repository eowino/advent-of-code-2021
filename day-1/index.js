// @ts-check

// https://adventofcode.com/2021/day/1

const data = require('fs').readFileSync('./data.txt', 'utf8');
const measurements = data.split('\n').map(Number);
let increasingSum = 0;

measurements.forEach((depth, index) => {
    if (index === 0) return;

    const currentSum = measurements[index - 1] + depth + measurements[index + 1];
    const nextSum = depth + measurements[index + 1] + measurements[index + 2];

    if (Number.isFinite(nextSum) && nextSum > currentSum) {
        increasingSum += 1
    }
});

console.log(increasingSum);