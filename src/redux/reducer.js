import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from './ActionTypes'

// const initialState = [{id: 0, desc: ''}]
const initialState = {list: []}

const reducer = (state=initialState, action) => {
    // console.log(action.payload)
  switch(action.type) {
    case ADD_ITEM:
        const {id, item} = action.payload
        return {...state, 
            list:[
            ...state.list,
            {
            id: id,
            item: item
            }]
        }
        
        // if(state[0].id === 0) {
        //     return [{id: 1, desc: action.itemName}]
        // }
        // else {
        // return  state.push({id: state.id + 1, desc: action.itemName})
        // }

    case DELETE_ITEM:
        const newList = state.list.filter(item => item.id !== action.payload)
        // console.log(newList)

        return {
            ...state,
            list: newList
        }
    case UPDATE_ITEM:
        console.log(action.payload.itemName)
        // console.log(idToBeUpdated, itemName)
         state.list.map(li => {
            if(li.id === action.payload.id) {
                li.item = action.payload.itemName
                console.log(li.item)
                return {
                    ...state,
                    list: [
                        {...state.list,
                            item: action.payload.itemName}
                        
                    ] 
                }
            }
            return state
        })
        break
    default:
        return state
  }
}

export default reducer
