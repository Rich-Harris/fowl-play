import fs from 'node:fs';

export function GET() {
	const bird = Math.random() < 2 / 3 ? 'duck' : 'goose';
	const data = fs.readFileSync(`src/routes/duckduckgoose.jpg/${bird}.jpg`);

	return new Response(data, {
		headers: {
			'Content-Type': 'image/jpeg',
			'Content-Length': data.length.toString()
		}
	});
}
