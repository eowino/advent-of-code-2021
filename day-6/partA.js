// @ts-check

// https://adventofcode.com/2021/day/6

const data = require('fs').readFileSync('./data.txt', 'utf8').split(',').map(Number);
const state = [...data];
let days = 0;

const TOTAL_NUMBER_OF_DAYS = 80;

while (days < TOTAL_NUMBER_OF_DAYS) {
    const timersToPush = [];
    state.forEach((internalTimer, index) => {
        if (internalTimer === 0) {
            state[index] = 6;
            timersToPush.push(8);
        } else {
            state[index] -= 1;
        }
    });
    
    state.push(...timersToPush);
    days += 1;
}

console.log('total fish:', state.length)