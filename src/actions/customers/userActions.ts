import {
    IGetUsersInProgressAction,
    IGetUsersSuccessAction,
    IGetUsersFailAction
} from './get/index';
import {Dispatch} from 'redux';
import keys from '../ActionTypeKeys';
import IStoreState from '../../store/IStoreState';
import IUsers from '../../models/IUsers';
import {getUsers as getUsersApi} from '../../api/userApi'


function getUsers () : ( dispatch : Dispatch<IStoreState>) => Promise<void>{
    return async (dispatch:Dispatch<IStoreState>) =>{
        dispatch(getUsersInProgress())

        try{
            const users : IUsers = await getUsersApi()

            dispatch(getUsersSuccess(users))
        }catch(err){
            dispatch(getUserFail(err))
        }
    }
}


function getUsersInProgress () : IGetUsersInProgressAction {
    return {
        type : keys.GET_CUSTOMERS_INPROGRESS
    }
}


function getUsersSuccess (users : IUsers) : IGetUsersSuccessAction {
    return {
        type : keys.GET_CUSTOMERS_SUCCESS,
        payload : {
            users
        }
    }
}


function getUserFail (error:Error) : IGetUsersFailAction {
    return {
        type : keys.GET_CUSTOMERS_FAIL,
        payload : {
            error
        }
    }
}