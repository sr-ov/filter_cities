import React from 'react'
import Line from '../Line'
import TotalLine from '../TotalLine'

function CountryBlock({ country, count, cities }) {
	return (
		<div className="dropdown-lists__countryBlock">
			<TotalLine country={country} count={count} />
			{cities.map((el) => (
				<Line key={el.name} {...el} />
			))}
		</div>
	)
}

export default React.memo(CountryBlock)
