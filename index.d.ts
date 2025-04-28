export type ParsedColor = {
    R: number;
    G: number;
    B: number;
    A: number;
}

export default function parse(colorStr: string): ParsedColor