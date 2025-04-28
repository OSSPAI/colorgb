import { Suite } from 'bench-node';
import assert from 'assert'
import colorParse from 'color-parse'
import parseColor from 'parse-color'
import colorString from 'color-string'
import rgbcolor from 'rgbcolor'
import colorrgba from 'color-rgba'
import { parse as colorgbParse } from '../index.js'

const hexTemplates = ["#000", "#000000", "#00000000"]
const colors = []

function getHexNumber() {
    return (~~(Math.random() * 16)).toString(16);
}

let templateItem;
for (let i = 0; i < 10000000; i++) {
    templateItem = hexTemplates[Math.floor(Math.random() * hexTemplates.length)]
    colors.push(templateItem.replace(/0/g, getHexNumber))
}

const colorsCount = colors.length

const suite = new Suite();

suite.add('[HEX] colorgb', (timer) => {
    timer.start();
    for (let i = 0; i < timer.count; i = i + 1 % colorsCount) {
        assert.ok(colorgbParse(colors[i]))
    }
    timer.end(timer.count);
});

suite.add('[HEX] color-parse', (timer) => {
    timer.start();
    for (let i = 0; i < timer.count; i = i + 1 % colorsCount) {
        assert.ok(colorParse(colors[i]))
    }
    timer.end(timer.count);
});

suite.add('[HEX] parse-color', (timer) => {
    timer.start();
    for (let i = 0; i < timer.count; i = i + 1 % colorsCount) {
        assert.ok(parseColor(colors[i]))
    }
    timer.end(timer.count);
});

suite.add('[HEX] parse-color', (timer) => {
    timer.start();
    for (let i = 0; i < timer.count; i = i + 1 % colorsCount) {
        assert.ok(parseColor(colors[i]))
    }
    timer.end(timer.count);
});

suite.add('[HEX] color-string', (timer) => {
    timer.start();
    for (let i = 0; i < timer.count; i = i + 1 % colorsCount) {
        assert.ok(colorString.get.rgb(colors[i]))
    }
    timer.end(timer.count);
});

suite.add('[HEX] rgbcolor', (timer) => {
    timer.start();
    for (let i = 0; i < timer.count; i = i + 1 % colorsCount) {
        assert.ok(new rgbcolor(colors[i]))
    }
    timer.end(timer.count);
});

suite.add('[HEX] colorrgba', (timer) => {
    timer.start();
    for (let i = 0; i < timer.count; i = i + 1 % colorsCount) {
        assert.ok(colorrgba(colors[i]))
    }
    timer.end(timer.count);
});

suite.run()