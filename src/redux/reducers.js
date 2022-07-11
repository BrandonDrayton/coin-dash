import { ADD_CRYPTO, REMOVE_CRYPTO } from "./actions"

const defaultState = {
    cryptos: [],
}

export const watchlistReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CRYPTO:
            return {
                ...state,
                cryptos: [...state.cryptos, action.crypto],
            }
        case REMOVE_CRYPTO:
            return {
                ...state,
                cryptos: state.cryptos.filter(crypto => crypto.rank !== action.crypto.rank)
            }
        default:
            return state
    }
}