export default function chunkd<T>(
	array: T[],
	index: number,
	total: number,
): T[] {
	let length = array.length
	let size = Math.floor(length / total)
	let remainder = length % total
	let offset = Math.min(index, remainder) + index * size
	let chunk = size + (index < remainder ? 1 : 0)

	return array.slice(offset, offset + chunk)
}

module.exports = chunkd
