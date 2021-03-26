import React from 'react'

function Input({ open, placeholder, value, handler }) {
	return (
		<input
			onClick={open}
			onChange={handler}
			value={value}
			className="select-cities"
			type="text"
			placeholder={placeholder}
		/>
	)
}

export default React.memo(Input)
