import React from 'react'
import { useDispatch } from 'react-redux'
import { addCountryAction } from '../../store/reducers/addDataReducer'
import { countryClickAction } from '../../store/reducers/countryClickReducer'

function TotalLine({ country, count }) {
	const dispatch = useDispatch()

	const clickHandler = () => {
		dispatch(countryClickAction())
		dispatch(addCountryAction(country))
	}

	return (
		<div onClick={clickHandler} className="dropdown-lists__total-line">
			<div className="dropdown-lists__country">{country}</div>
			<div className="dropdown-lists__count">{count}</div>
		</div>
	)
}

export default React.memo(TotalLine)
