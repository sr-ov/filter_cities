export const reduce = (func, payload) => {
	return (acc, { country, count, cities }) => {
		return [
			...acc,
			{
				country,
				count,
				cities: func(cities, payload),
			},
		]
	}
}

export const sort = (arr) => {
	return arr
		.slice(0)
		.sort((a, b) => b.count - a.count)
		.slice(0, 3)
}

export const filter = (arr, payload) =>
	arr.filter(({ name }) => name.toLowerCase().startsWith(payload.toLowerCase()))

export const checkVal = (val) => ['RU', 'DE', 'EN'].includes(val.toUpperCase())
