export const ADD_CRYPTO = 'watchlist/ADD_CRYPTO'
export const REMOVE_CRYPTO = 'watchlist/REMOVE_CRYPTO'

// add CRYPTO to watchlist
export const addCrypto = (crypto) => {
    return {
        type: ADD_CRYPTO,
        crypto,
    }
}

// remove CRYPTO from watchlist
export const removeCrypto = (crypto) => {
    return {
        type: REMOVE_CRYPTO,
        crypto,
    }
}