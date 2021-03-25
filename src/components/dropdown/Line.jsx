import React from 'react'
import { useDispatch } from 'react-redux'
import { cityinInputAction } from '../../store/reducers/cityClickReducer'

function Line({ name, count, link }) {
	const dispatch = useDispatch()

	const clickCityHandler = () => {
		dispatch(cityinInputAction({ name, link }))
	}

	return (
		<div onClick={clickCityHandler} className="dropdown-lists__line">
			<div className="dropdown-lists__city dropdown-lists__city">{name}</div>
			<div className="dropdown-lists__count">{count}</div>
		</div>
	)
}

export default React.memo(Line)
