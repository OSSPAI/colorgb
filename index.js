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
        case 'rgba':
            return {
                R: parseInt(numbers[0]),
                G: parseInt(numbers[1]),
                B: parseInt(numbers[2]),
                A: parseFloat(numbers[3]),
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
            r = ((parsedString >>> 8) & 0xf) * 17;
            g = ((parsedString >>> 4) & 0xf) * 17;
            b = (parsedString & 0xf) * 17;
            break;
        }
        case 4: {
            r = ((parsedString >>> 12) & 0xf) * 17;
            g = ((parsedString >>> 8) & 0xf) * 17;
            b = ((parsedString >>> 4) & 0xf) * 17;
            a = (parsedString & 0xf) * 17 / 255;
            break;
        }
        case 6: {
            r = (parsedString >>> 16 ) & 0xff;
            g = (parsedString >>> 8 ) & 0xff;
            b = parsedString & 0xff;
            break;
        }
        case 8: {
            r = (parsedString >>> 24) & 0xff;
            g = (parsedString >>> 16) & 0xff;
            b = (parsedString >>> 8) & 0xff;
            a = (parsedString & 0xff) / 255;
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
