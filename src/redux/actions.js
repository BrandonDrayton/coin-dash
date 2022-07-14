export const ADD_CRYPTO = 'ADD_CRYPTO'
export const REMOVE_CRYPTO = 'REMOVE_CRYPTO'

// add CRYPTO to watchlist
export const addCrypto = (text) => {
    return {
        type: ADD_CRYPTO,
        text: text
    }
}

// remove CRYPTO from watchlist
export const removeCrypto = (text) => {
    return {
        type: REMOVE_CRYPTO,
        text: text
    }
}