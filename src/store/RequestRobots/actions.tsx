import * as types from './types';
import {ThunkDispatch} from 'redux-thunk';

export const requestRobots = () => (dispatch: any) => {
    dispatch({ type: typeof types.REQUEST_ROBOTS_PENDING})
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data => dispatch({ type: typeof types.REQUEST_ROBOTS_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: typeof types.REQUEST_ROBOTS_FAILED, payload: error}))
}