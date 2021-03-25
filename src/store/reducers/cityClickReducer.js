const initialState = {
	cityInInput: '',
	linkInButton: '',
	cityСlick: false,
}

export const cityClickReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'CITY_IN_INPUT_&_LINK_IN_BUTTON':
			return {
				...state,
				cityInInput: payload.name,
				linkInButton: payload.link,
				cityСlick: true,
			}

		case 'CANCEL_CITY_CLICK':
			return {
				...state,
				cityСlick: false,
			}

		default:
			return state
	}
}

export const cityinInputAction = (payload) => ({
	type: 'CITY_IN_INPUT_&_LINK_IN_BUTTON',
	payload,
})

export const cancelCityClickAction = () => ({
	type: 'CANCEL_CITY_CLICK',
})
