import duck from './duck.jpg';
import goose from './goose.jpg';
import { read } from '$app/server';

export function GET() {
	const bird = Math.random() < 2 / 3 ? duck : goose;
	return read(bird);
}
