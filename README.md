# colorgb

![logo](./assets/colorgb.png)

Node.js and browser library for parsing color string

## Usage

```bash
npm install @osspai/colorgb
```

```js
import { parse } from '@osspai/colorgb'

parse('#FF0000')
// { R: 255, G: 0, B: 0, A: 1}
```

## Supported formats

- `Color names`
- `#RGB[A]`
- `#RRGGBB[AA]`
- `rgb(100, 100, 100)/rgb(100 100 100)`
- `rgba(100, 100, 100, 0.8)/rgba(100 100 100 / 0.8)`

## Benchmarks

See [BENCHMARKS.md](./BENCHMARKS.md)

## Changelog

See [CHANGELOG.md](./CHANGELOG.md)


## Alternatives
- https://www.npmjs.com/package/color-parse
- https://www.npmjs.com/package/parse-color
- https://www.npmjs.com/package/color-string
- https://www.npmjs.com/package/rgbcolor
- https://www.npmjs.com/package/color-rgba  
