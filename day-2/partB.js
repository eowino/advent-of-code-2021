// @ts-check

// https://adventofcode.com/2021/day/2

const data = require('fs').readFileSync('./data.txt', 'utf8').split('\n');
const state = {
    horizontal: 0,
    depth: 0,
    aim: 0
}
data.forEach(item => {
    const [direction, steps] = item.split(' ');
    switch (direction) {
        case 'up':
            state.aim -= parseInt(steps);
            break;
        case 'down':
            state.aim += parseInt(steps);
            break;
        case 'forward':
            state.horizontal += parseInt(steps);
            state.depth += state.aim * parseInt(steps);
            break
    }
})

console.log('result:', state.depth * state.horizontal)