import { createContext } from 'react'
import { LOAD_INITIAL_DATA, SET_LOADING_STATE, SET_ERROR_STATE, ADD_TO_CART, TOGGLE_LIKE_PRODUCT } from './actions'


export const StateContext = createContext()

export const initialState = { products: [], categories: [], cart: {}, loading: false, error: false }

export const reducer = (state=initialState, action={ type: "NOOP", payload: {} }) => {
	switch (action.type) {
		case LOAD_INITIAL_DATA:
			const { products, categories, } = action.payload
			return { ...state, products, categories, }
		case SET_LOADING_STATE:
			const { loading } = action.payload
			return { ...state, loading, }
		case SET_ERROR_STATE:
			const { error } = action.payload
			return { ...state, error, }
		case TOGGLE_LIKE_PRODUCT:
			const updatedProducts = state.products.map(product => {
				if (product.id !== action.payload.id) return product
				return {
					...product,
					liked: product.liked ? false : true,
				}
			})
			return { ...state, products: updatedProducts, }
		case ADD_TO_CART:
			const { id, count } = action.payload
			return {
				...state,
				cart: {
					...state.cart,
					[id]: count,
				}
			}
		default:
			return state
	}
}
