import { ADD_TILE, REMOVE_TILE } from "./constants"

export function addTile(color) {
    return {
        type: ADD_TILE,
        color: color,
        created_at: Date.now()
    }
}

export function removeTile(id) {
    return {
        type: REMOVE_TILE,
        id: id
    }
}

export function addTileWithChecking(color) {
    return function (dispatch, getState) {
        if (getState().grid.length < 5) {
            dispatch(addTile(color))
        }
    }
}