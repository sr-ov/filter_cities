const initialState = {
	countries: [],
	country: '',
}

export const addDataReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'ADD_COUNTRIES':
			return {
				...state,
				countries: payload,
			}

		case 'ADD_COUNTRY':
			return {
				...state,
				country: payload,
			}

		default:
			return state
	}
}

export const addCountriesAction = (payload) => ({
	type: 'ADD_COUNTRIES',
	payload,
})

export const addCountryAction = (payload) => ({
	type: 'ADD_COUNTRY',
	payload,
})
