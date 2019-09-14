import {CHANGE_SEARCH_FIELD, ISetSearchFieldAction} from './types'

const initialStateSearch = {
    searchField:''
}

export const searchRobots = (state=initialStateSearch, action: ISetSearchFieldAction) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload} ;
        default:
            return state
    }
}