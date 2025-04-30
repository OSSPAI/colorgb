import { suite as hexSuite } from './hex.js'
import { suite as colorNameSuite } from './colorNames.js'
import { suite as rgbSuite } from './rgb.js'

const seq = [
    hexSuite,
    colorNameSuite,
    rgbSuite,
]

async function runBenchmarks() {
    for (const suite of seq) {
        await suite.run()
        console.log('\n')
    }
}

runBenchmarks()
