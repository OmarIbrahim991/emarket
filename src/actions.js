export const LOAD_INITIAL_DATA = "LOAD_INITIAL_DATA"
export const SET_LOADING_STATE = "SET_LOADING_STATE"
export const SET_ERROR_STATE = "SET_ERROR_STATE"
export const ADD_TO_CART = "ADD_TO_CART"
export const TOGGLE_LIKE_PRODUCT = "TOGGLE_LIKE_PRODUCT"

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
