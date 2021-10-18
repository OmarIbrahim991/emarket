export const LOAD_INITIAL_DATA = "LOAD_INITIAL_DATA"
export const SET_LOADING_STATE = "SET_LOADING_STATE"
export const SET_ERROR_STATE = "SET_ERROR_STATE"
export const ADD_TO_CART = "ADD_TO_CART"
export const TOGGLE_LIKE_PRODUCT = "TOGGLE_LIKE_PRODUCT"
export const SET_SEARCH = "SET_SEARCH"
export const ADD_ORDER = "ADD_ORDER"
export const LOG_USER = "LOG_USER"
export const ADD_REVIEW = "ADD_REVIEW"

export const setLoadingState = (loadingState) => ({
	type: SET_LOADING_STATE,
	payload: { loading: loadingState, },
})

export const setErrorState = (errorState) => ({
	type: SET_ERROR_STATE,
	payload: { error: errorState, },
})

export const loadInitialData = ({ products=[], categories=[], }) => ({
	type: LOAD_INITIAL_DATA,
	payload: {
		products,
		categories,
	}
})

export const addToCart = ({ id, count }) => ({
	type: ADD_TO_CART,
	payload: { id, count, },
})

export const toggleLikeProduct = (id) => ({
	type: TOGGLE_LIKE_PRODUCT,
	payload: { id, },
})

export const setSearch = (search) => ({
	type: SET_SEARCH,
	payload: { search, }
})

export const addOrder = (order) => ({
	type: ADD_ORDER,
	payload: { order, }
})

export const login = (user) => ({
	type: LOG_USER,
	payload: { user, }
})

export const logout = () => ({
	type: LOG_USER,
	payload: { user: "" }
})

export const addReview = ({ id, review }) => ({
	type: ADD_REVIEW,
	payload: { id, review },
})
