import {
    IGetUsersFailAction,
    IGetUsersSuccessAction,
    IGetUsersInProgressAction
} from './users/get';

type ActionTypes = 
| IGetUsersFailAction
| IGetUsersInProgressAction
| IGetUsersSuccessAction


export default ActionTypes;