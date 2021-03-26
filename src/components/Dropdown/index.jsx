import React, { useEffect, useRef } from 'react'
import cNs from 'classnames'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import List from './List'
import { reduce, filter, sort } from '../../helpers'

const arCountries = ({ addDataReducer }) => addDataReducer.countries
const country = ({ addDataReducer }) => addDataReducer.country

const countrySelector = createSelector(arCountries, country, (arCountries, country) =>
	arCountries.filter((el) => el.country === country)
)

function Dropdown({ valueDebounce }) {
	const elRef = useRef()
	const heightRef = useRef()
	const country = useSelector(countrySelector)
	const countryClick = useSelector(({ countryClickReducer }) => countryClickReducer.countryClick)
	const topCities = useSelector(({ addDataReducer }) =>
		addDataReducer.countries.reduce(reduce(sort), [])
	)
	const searchCountries = useSelector(({ addDataReducer }) =>
		addDataReducer.countries
			.reduce(reduce(filter, valueDebounce), [])
			.filter(({ cities }) => cities.length > 0)
	)

	useEffect(() => {
		if (countryClick) {
			elRef.current.scrollTop = 0
			heightRef.current = elRef.current.scrollTop
		} else {
			elRef.current.scrollTop = heightRef.current
		}
	}, [countryClick])

	return (
		<div ref={elRef} className="dropdown">
			<div
				className={cNs('dropdown-lists', {
					translate: countryClick && !valueDebounce,
				})}
			>
				<List data={valueDebounce ? searchCountries : topCities} />
				<List data={valueDebounce ? [] : country} />
			</div>
			{valueDebounce && !searchCountries.length && <p className="not">Ничего не найдено</p>}
		</div>
	)
}

export default React.memo(Dropdown)
