import { addCountriesAction } from './addDataReducer'
import axios from 'axios'

export const asyncData = (request) => (dispatch) => {
	axios
		.get(`https://data-filter-cities-default-rtdb.firebaseio.com/${request}.json`)
		.then(({ data }) => {
			localStorage.setItem('cities', JSON.stringify(data))
			dispatch(addCountriesAction(data))
		})
		.catch((error) => console.error(error))
}
