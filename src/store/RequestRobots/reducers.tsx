import * as types from './types';

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialStateRobots, action: types.IRequestRobots) => {
    switch(action.type){
        case types.REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case types.REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false})
        case types.REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false})
        default:
            return state;
    }
}