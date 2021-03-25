const initialState = {
	countryClick: false,
}

export const countryClickReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'COUNTRY_CLICK':
			return {
				countryClick: !state.countryClick,
			}
		default:
			return state
	}
}

export const countryClickAction = () => ({ type: 'COUNTRY_CLICK' })
