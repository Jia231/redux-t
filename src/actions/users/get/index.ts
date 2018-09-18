import keys from "../../ActionTypeKeys";
import IUser from '../../../models/IUser';

export interface IGetUsersFailAction{
    readonly type:keys.GET_USERS_FAIL,
    readonly payload : {
        readonly error : Error;
    }
}

export interface IGetUsersInProgressAction{
    readonly type:keys.GET_USERS_INPROGRESS
}

export interface IGetUsersSuccessAction{
    readonly type:keys.GET_USERS_SUCCESS,
    readonly payload:{
        readonly users:IUser[]
    }
}