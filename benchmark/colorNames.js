import { Suite } from 'bench-node';
import assert from 'assert'
import { makeMarkdownReporter } from './markdownReporter.js'
import { colors as colorObj } from '../colors.js'

import colorParse from 'color-parse'
import parseColor from 'parse-color'
import colorString from 'color-string'
import rgbcolor from 'rgbcolor'
import colorrgba from 'color-rgba'
import { parse as colorgbParse } from '../index.js'

const colorNames = Object.keys(colorObj)
const colors = []

for (let i = 0; i < 1000000; i++) {
    colors.push(colorNames[Math.floor(Math.random() * colorNames.length)])
}

const colorsCount = colors.length

export const suite = new Suite({ reporter: makeMarkdownReporter('Color name') });

suite.add('[Name] colorgb', (timer) => {
    timer.start();
    for (let i = 0; i < timer.count; i = i + 1 % colorsCount) {
        assert.ok(colorgbParse(colors[i]))
    }
    timer.end(timer.count);
});

suite.add('[Name] color-parse', (timer) => {
    timer.start();
    for (let i = 0; i < timer.count; i = i + 1 % colorsCount) {
        assert.ok(colorParse(colors[i]))
    }
    timer.end(timer.count);
});

suite.add('[Name] parse-color', (timer) => {
    timer.start();
    for (let i = 0; i < timer.count; i = i + 1 % colorsCount) {
        assert.ok(parseColor(colors[i]))
    }
    timer.end(timer.count);
});

suite.add('[Name] parse-color', (timer) => {
    timer.start();
    for (let i = 0; i < timer.count; i = i + 1 % colorsCount) {
        assert.ok(parseColor(colors[i]))
    }
    timer.end(timer.count);
});

suite.add('[Name] color-string', (timer) => {
    timer.start();
    for (let i = 0; i < timer.count; i = i + 1 % colorsCount) {
        assert.ok(colorString.get.rgb(colors[i]))
    }
    timer.end(timer.count);
});

suite.add('[Name] rgbcolor', (timer) => {
    timer.start();
    for (let i = 0; i < timer.count; i = i + 1 % colorsCount) {
        assert.ok(new rgbcolor(colors[i]))
    }
    timer.end(timer.count);
});

suite.add('[Name] colorrgba', (timer) => {
    timer.start();
    for (let i = 0; i < timer.count; i = i + 1 % colorsCount) {
        assert.ok(colorrgba(colors[i]))
    }
    timer.end(timer.count);
});
