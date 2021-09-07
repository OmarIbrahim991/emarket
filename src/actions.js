export const LOAD_INITIAL_DATA = "LOAD_INITIAL_DATA"
export const SET_LOADING_STATE = "SET_LOADING_STATE"
export const SET_ERROR_STATE = "SET_ERROR_STATE"

export const setLoadingState = (loadingState) => ({
    type: SET_LOADING_STATE,
    payload: { loading: loadingState, },
})

export const setErrorState = (errorState) => ({
    type: SET_ERROR_STATE,
    payload: { loading: errorState, },
})

export const loadInitialData = ({ products=[], categories=[], cart=[], }) => ({
    type: LOAD_INITIAL_DATA,
    payload: {
        products,
        categories,
        cart,
    }
})
