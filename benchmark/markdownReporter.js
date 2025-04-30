function formatTime(timeInNs) {
		if (timeInNs > 1e9) {
			return `${(timeInNs / 1e9).toFixed(2)}s`;
		}

		if (timeInNs > 1e6) {
			return `${(timeInNs / 1e6).toFixed(2)}ms`;
		}

		if (timeInNs > 1e3) {
			return `${(timeInNs / 1e3).toFixed(2)}us`;
		}

		return `${(timeInNs).toFixed(2)}ns`;
}

function renderMarkdownTable(header, body) {
    const columnsMaxLength = new Array(header.length).fill(0).map((_, i) => header[i].length)

    for (let r = 0; r < body.length; r++) {
        for (let c = 0; c < body[r].length; c++) {
            if (body[r][c].length > columnsMaxLength[c]) {
                columnsMaxLength[c] = body[r][c].length
            }
        }
    }

    const lines = [
        '| ' + header.map((v, i) => v.padStart(columnsMaxLength[i], ' ')).join(' | ') + ' |',
        '| ' + header.map((_, i) => "-".padStart(columnsMaxLength[i], ' ')).join(' | ') + ' |',
    ]

    for (const row of body) {
        lines.push('| ' + row.map((v, i) => i == 0 ? v.padEnd(columnsMaxLength[i], ' ') : v.padStart(columnsMaxLength[i], ' ')).join(' | ') + ' |')
    }

    return lines.join('\n')
}

export function makeMarkdownReporter(variant) {
    return (results) => {
        results.sort((a, b) => b.opsSec - a.opsSec)

        const lines = [
            `### ${variant}`,
            ``,
            renderMarkdownTable(
                ['Library', 'Ops/sec', 'Iterations', 'Min/max'],
                results.map((item) => ([
                    item.name,
                    Math.round(item.opsSec).toLocaleString(),
                    item.iterations.toLocaleString(),
                    `${formatTime(item.histogram.min)}/${formatTime(item.histogram.max)}`,
                ]))
            )
        ]

        console.log(lines.join('\n'))
    }
}