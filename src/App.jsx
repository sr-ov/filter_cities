import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from './components/Button'
import Dropdown from './components/Dropdown'
import InputBlock from './components/InputBlock'
import Modal from './components/Modal'
import { useDebounce } from './customHooks/useDebounce'
import { useInput } from './customHooks/useInput'
import { useOnClickOutside } from './customHooks/useOnClickOutside'
import { checkVal } from './helpers'
import { addCountriesAction } from './store/reducers/addDataReducer'
import { asyncData } from './store/reducers/asyncData'
import { cancelCityClickAction } from './store/reducers/cityClickReducer'

function App() {
	const dispatch = useDispatch()
	const [isOpenDropdown, setOpenDropdown] = useState(false)
	const [isOpenModal, setOpenModal] = useState(false)
	const { value: inputInModalValue, handler: inputInModalHandler } = useInput()
	const { value, handler } = useInput()
	const { cityСlick, cityInInput } = useSelector(({ cityClickReducer }) => cityClickReducer)

	const valueDebounce = useDebounce(value, 800)
	const inputInModalValueDebounce = useDebounce(inputInModalValue, 500)

	useEffect(() => {
		const cities = localStorage.getItem('cities')
		if (cities) {
			dispatch(addCountriesAction(JSON.parse(cities)))
		} else {
			setOpenModal(true)
			if (checkVal(inputInModalValueDebounce)) {
				dispatch(asyncData(inputInModalValueDebounce.toUpperCase()))
				setOpenModal(false)
			}
		}
	}, [dispatch, inputInModalValueDebounce])

	const open = () => setOpenDropdown(true)
	const close = () => setOpenDropdown(false)

	const inputHandler = (val) => {
		handler(val)

		if (cityСlick) {
			dispatch(cancelCityClickAction())
		}
	}

	return (
		<section className="main">
			<div ref={useOnClickOutside(close)} className="input-cities">
				<InputBlock
					{...{
						open,
						cityСlick,
						cityInInput,
						clearInput: () => inputHandler(''),
						isShowCloseButton: value || cityСlick,
						value: cityСlick ? cityInInput : value,
						handler: (e) => inputHandler(e),
					}}
				/>

				{isOpenDropdown && <Dropdown {...{ valueDebounce }} />}

				<Button />
			</div>
			{isOpenModal && <Modal {...{ value: inputInModalValue, handler: inputInModalHandler }} />}
		</section>
	)
}

export default App
