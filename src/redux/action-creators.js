import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "./ActionTypes";

export const addItem = (item) => {
    // console.log(item)
    return {
        type: ADD_ITEM,
        payload: {
            id: new Date().getTime().toString(),
            item: item
        }
    }
}

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}

export const updateItem = (id, text) => {
    // console.log(id, text)
    return {
        type: UPDATE_ITEM,
        payload: {
            id: id,
            itemName: text
        }
    }
}