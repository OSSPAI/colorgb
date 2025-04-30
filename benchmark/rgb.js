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

const colorsCount = 1000000
for (let i = 0; i < colorsCount; i++) {
    colors.push(`rgb(${getRandom(0, 256)}, ${getRandom(0, 256)}, ${getRandom(0, 256)})`)
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
