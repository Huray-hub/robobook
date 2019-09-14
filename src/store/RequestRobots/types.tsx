export const REQUEST_ROBOTS_PENDING = 'REQUEST_ROBOTS_PENDING';
export const REQUEST_ROBOTS_SUCCESS= 'REQUEST_ROBOTS_SUCCESS';
export const REQUEST_ROBOTS_FAILED = 'REQUEST_ROBOTS_FAILED';

interface IRequestRobotsPending {
    type: typeof REQUEST_ROBOTS_PENDING,
    isRequired: boolean
}

interface IRequestRobotsAccepted {
    type: typeof REQUEST_ROBOTS_SUCCESS,
    payload: any,
    isRequired: boolean
}

interface IRequestRobotsFailed {
    type: typeof REQUEST_ROBOTS_FAILED,
    payload: any,
    isRequired: boolean
}

export type IRequestRobots = IRequestRobotsPending | IRequestRobotsAccepted | IRequestRobotsFailed;