import React from 'react'
import Input from '../Input'
import './style.css'

function Modal(props) {
	return (
		<div className="modal-overlay">
			<div className="modal">
				<Input {...{ placeholder: 'введите RU, DE, EN', ...props }} />
			</div>
		</div>
	)
}

export default Modal
