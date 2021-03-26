import React from 'react'
import CountryBlock from '../CountryBlock'

function List({ data }) {
	return (
		<div className="dropdown-lists__list">
			{data.map((el) => (
				<CountryBlock key={el.country} {...el} />
			))}
		</div>
	)
}

export default React.memo(List, (prev, cur) => {
	return JSON.stringify(prev.data) === JSON.stringify(cur.data)
})
