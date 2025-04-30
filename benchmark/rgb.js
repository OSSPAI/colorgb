import { Suite } from 'bench-node';
import assert from 'assert'
import { makeMarkdownReporter } from './markdownReporter.js'

import colorParse from 'color-parse'
import parseColor from 'parse-color'
import colorString from 'color-string'
import rgbcolor from 'rgbcolor'
import colorrgba from 'color-rgba'
import { parse as colorgbParse } from '../index.js'

const colors = []

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function getRGB1() {
    return `rgb(${getRandom(0, 256)}, ${getRandom(0, 256)}, ${getRandom(0, 256)})`
}

function getRGB2() {
    return `rgb(${getRandom(0, 256)} ${getRandom(0, 256)} ${getRandom(0, 256)})`
}

function getRGBA1() {
    return `rgba(${getRandom(0, 256)}, ${getRandom(0, 256)}, ${getRandom(0, 256)}, ${getRandomFloat(0, 1).toFixed(2)})`
}

function getRGBA2() {
    return `rgba(${getRandom(0, 256)} ${getRandom(0, 256)} ${getRandom(0, 256)} / ${getRandomFloat(0, 1).toFixed(2)})`
}

const colorsCount = 1000000
for (let i = 0; i < colorsCount; i++) {
    const ver = getRandom(0, 101)
    if (ver <= 25) {
        colors.push(getRGB1())
    } else if (ver <= 50) {
        colors.push(getRGB2())
    } else if (ver <= 75) {
        colors.push(getRGBA1())
    } else if (ver <= 100) {
        colors.push(getRGBA2())
    }
}

export const suite = new Suite({ reporter: makeMarkdownReporter('RGB') });

suite.add('[RGB] colorgb', (timer) => {
    timer.start();
    for (let i = 0; i < timer.count; i = i + 1 % colorsCount) {
        assert.ok(colorgbParse(colors[i]))
    }
    timer.end(timer.count);
});

suite.add('[RGB] color-parse', (timer) => {
    timer.start();
    for (let i = 0; i < timer.count; i = i + 1 % colorsCount) {
        assert.ok(colorParse(colors[i]))
    }
    timer.end(timer.count);
});

suite.add('[RGB] parse-color', (timer) => {
    timer.start();
    for (let i = 0; i < timer.count; i = i + 1 % colorsCount) {
        assert.ok(parseColor(colors[i]))
    }
    timer.end(timer.count);
});

suite.add('[RGB] parse-color', (timer) => {
    timer.start();
    for (let i = 0; i < timer.count; i = i + 1 % colorsCount) {
        assert.ok(parseColor(colors[i]))
    }
    timer.end(timer.count);
});

suite.add('[RGB] color-string', (timer) => {
    timer.start();
    for (let i = 0; i < timer.count; i = i + 1 % colorsCount) {
        assert.ok(colorString.get.rgb(colors[i]))
    }
    timer.end(timer.count);
});

suite.add('[RGB] rgbcolor', (timer) => {
    timer.start();
    for (let i = 0; i < timer.count; i = i + 1 % colorsCount) {
        assert.ok(new rgbcolor(colors[i]))
    }
    timer.end(timer.count);
});

suite.add('[RGB] colorrgba', (timer) => {
    timer.start();
    for (let i = 0; i < timer.count; i = i + 1 % colorsCount) {
        assert.ok(colorrgba(colors[i]))
    }
    timer.end(timer.count);
});
