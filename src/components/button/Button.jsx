import React from 'react'
import { useSelector } from 'react-redux'

function Button() {
	const linkInButton = useSelector(({ cityClickReducer }) => cityClickReducer.linkInButton)

	return (
		<a
			onClick={linkInButton ? null : (e) => e.preventDefault()}
			className="button"
			href={linkInButton}
			target="_blank"
			rel="noreferrer"
		>
			Перейти
		</a>
	)
}

export default React.memo(Button)
