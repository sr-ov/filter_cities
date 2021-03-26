import React from 'react'
import CloseButton from './CloseButton'
import FocusBorder from './FocusBorder'
import Input from '../Input'

function InputBlock({ clearInput, isShowCloseButton, ...props }) {
	return (
		<>
			<Input {...{ placeholder: 'Страна или город', ...props }} />
			{isShowCloseButton && <CloseButton onClickfn={clearInput} />}
			<FocusBorder />
		</>
	)
}
export default InputBlock
