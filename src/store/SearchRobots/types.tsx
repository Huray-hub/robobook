export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';

export interface ISetSearchFieldAction {
    type: typeof CHANGE_SEARCH_FIELD,
    payload: string
}