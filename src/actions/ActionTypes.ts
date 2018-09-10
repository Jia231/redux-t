import {
    IGetUsersInProgressAction,
    IGetUsersSuccessAction,
    IGetUsersFailAction
} from './customers/get/index';


type ActionType = 
| IGetUsersFailAction
| IGetUsersInProgressAction
| IGetUsersSuccessAction

export default ActionType;