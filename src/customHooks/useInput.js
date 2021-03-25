import { useState } from 'react'

export const useInput = (val = '') => {
	const [value, setValue] = useState(val)

	return {
		value,
		handler: (e) => setValue(e.target.value),
		setValue: (val) => setValue(val),
	}
}
