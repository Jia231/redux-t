import keys from '../../ActionTypeKeys';
import IUsers from '../../../models/IUsers';

export interface IGetUsersInProgressAction {
    readonly type : keys.GET_CUSTOMERS_INPROGRESS,
}

export interface IGetUsersSuccessAction {
    readonly type : keys.GET_CUSTOMERS_SUCCESS,
    readonly payload : {
        readonly users : IUsers
    }
}

export interface IGetUsersFailAction {
    readonly type : keys.GET_CUSTOMERS_FAIL,
    readonly payload : {
        readonly error : Error
    }
}

