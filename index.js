import { colors } from './colors.js'

const prefixRegex = /^[a-z]+/
const numbersRegex = /\d+(\.\d+)?/g

export function parse(colorStr) {
    colorStr = colorStr.toLowerCase()

    // HEX
    if (colorStr[0] === '#') {
        return parseHex(colorStr)
    }

    if (Object.hasOwn(colors, colorStr)) {
        return colors[colorStr]
    }

    const prefix = colorStr.match(prefixRegex)[0]
    const numbers = colorStr.match(numbersRegex)

    switch (prefix) {
        case 'rgb':
            return {
                R: parseInt(numbers[0]),
                G: parseInt(numbers[1]),
                B: parseInt(numbers[2]),
                A: 1,
            }
    }

    return { R: 0, G: 0, B: 0, A: 1 }
}

export function parseHex(colorStr) {
    colorStr = colorStr.slice(1)
    const parsedString = parseInt(colorStr, 16)
    let r = 0;
    let g = 0;
    let b = 0;
    let a = 1;

    if (parsedString === NaN) {
        return {
            R: r,
            G: g,
            B: b,
            A: a,
        }
    }

    const strLength = colorStr.length
    switch (strLength) {
        case 3: {
            r = ((parsedString & 0xf00) >>> 8) * 17;
            g = ((parsedString & 0x0f0) >>> 4) * 17;
            b = (parsedString & 0x00f) * 17;
            break;
        }
        case 4: {
            r = ((parsedString & 0xf000) >>> 12) * 17;
            g = ((parsedString & 0x0f00) >>> 8) * 17;
            b = ((parsedString & 0x00f0) >>> 4) * 17;
            a = (parsedString & 0x000f) * 17 / 255;
            break;
        }
        case 6: {
            r = (parsedString & 0xff0000) >>> 16;
            g = (parsedString & 0x00ff00) >>> 8;
            b = parsedString & 0x0000ff;
            break;
        }
        case 8: {
            r = (parsedString & 0xff000000) >>> 24;
            g = (parsedString & 0x00ff0000) >>> 16;
            b = (parsedString & 0x0000ff00) >>> 8;
            a = (parsedString & 0x000000ff) / 255;
            break;
        }
    }

    return {
        R: r,
        G: g,
        B: b,
        A: a,
    }
}
