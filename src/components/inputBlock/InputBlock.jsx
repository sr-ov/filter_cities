import React from 'react'
import CloseButton from './CloseButton'
import FocusBorder from './FocusBorder'
import { Input } from '../input'

function InputBlock({ closeButtonHandler, isShowCloseButton, ...props }) {
	return (
		<>
			<Input {...{ placeholder: 'Страна или город', ...props }} />
			{isShowCloseButton && <CloseButton onClickfn={closeButtonHandler} />}
			<FocusBorder />
		</>
	)
}
export default InputBlock
