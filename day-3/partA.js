// @ts-check

// https://adventofcode.com/2021/day/3

const data = require('fs').readFileSync('./data.txt', 'utf8').split('\n');
const state = {};
let epsilonRate = '';
let gammaRate = '';

data.forEach(line => {
    // group bits by column
    line.split('').forEach((char, index) => {
        state[index] ? state[index].push(char) : (state[index] = [char]);
    });
});

Object.values(state).forEach(arrayOfBits => {
    // get most common number
    let zeros = 0;
    let ones = 0;
    arrayOfBits.forEach(bit => {
        bit === '0' ? zeros += 1 : ones += 1;
    });

    // update gamma rate
    zeros > ones ? gammaRate += '0' : gammaRate += '1';
});

// set epsilon rate
gammaRate.split('').forEach((bit) => {
    bit === '1' ? epsilonRate += '0': epsilonRate += '1';
});

console.log('result:', parseInt(gammaRate, 2) * parseInt(epsilonRate, 2))