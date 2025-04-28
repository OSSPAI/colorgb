

export function parse(colorStr) {

    // HEX
    if (colorStr[0] === '#') {
        return parseHex(colorStr)
    }
}

export function parseHex(colorStr) {
    colorStr = colorStr.slice(1)
    const parsedString = parseInt(colorStr)
    let r = 0, g = 0, b = 0;
    let a = 1;

    if (parsedString === NaN) {
        return {
            R: r,
            G: g,
            B: b,
            A: a,
        }
    }

    switch (colorStr.length) {
        case 3:
            r = (parsedString & 0xf00) * 17
            g = (parsedString & 0x0f0) * 17
            b = (parsedString & 0x00f) * 17
            break;
        case 6:
            r = parsedString & 0xff0000
            g = parsedString & 0x00ff00
            b = parsedString & 0x0000ff
            break;
        case 8:
            r = parsedString & 0xff000000
            g = parsedString & 0x00ff0000
            b = parsedString & 0x0000ff00
            a = parsedString & 0x000000ff
    }

    return {
        R: r,
        G: g,
        B: b,
        A: a,
    }
}
