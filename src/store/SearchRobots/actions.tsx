import { CHANGE_SEARCH_FIELD, ISetSearchFieldAction } from './types'

export const setSearchField = (text: string): ISetSearchFieldAction => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text 
    };       
};
