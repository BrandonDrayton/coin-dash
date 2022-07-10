import { showMore, SHOW_MORE } from "./actions"

const defaultState = {
    showMore: false
}

export function cryptoReducer(state = defaultState, action) {
    switch (action.type) {
        case SHOW_MORE:
            return {
                showMore: !state.showMore
            }
        default:
            return state
    }
}