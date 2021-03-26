import { useState } from 'react'

export const useInput = (val = '') => {
	const [value, setValue] = useState(val)

	return {
		value,
		handler: (arg) => setValue(arg.target ? arg.target.value : arg),
	}
}
