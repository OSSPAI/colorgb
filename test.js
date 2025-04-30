import assert from 'assert'
import { parse } from './index.js'

const testCases = [
    {
        input: '#FED',
        result: { R: 255, G: 238, B: 221, A: 1 },
    },
    {
        input: '#FEDC',
        result: { R: 255, G: 238, B: 221, A: .8 },
    },
    {
        input: '#FFEEDD',
        result: { R: 255, G: 238, B: 221, A: 1 },
    },
    {
        input: '#FFEEDDCC',
        result: { R: 255, G: 238, B: 221, A: .8 },
    },
    {
        input: 'rgb(50, 100, 150)',
        result: { R: 50, G: 100, B: 150, A: 1 },
    },
]

for (const testCase of testCases) {
    assert.deepStrictEqual(parse(testCase.input), testCase.result, `${testCase.input} -> ${JSON.stringify(testCase.result)}`)
}