import {Dispatch} from "redux";
import {getUsers as getUsersApi} from '../../api/userApi';
import keys from "../ActionTypeKeys";
import {IGetUsersFailAction,
    IGetUsersInProgressAction,
    IGetUsersSuccessAction} from "../users/get";
import {UserApiResponse} from '../../models/IUser';
import IUser from '../../models/IUser';



export default function getUsers():(dispatch:Dispatch<UserApiResponse>)=>Promise<void>{
    return async (dispatch:Dispatch<UserApiResponse>) =>{
        dispatch(getUsersInProgress())
        try{
            const response : UserApiResponse = await getUsersApi();
            const data : IUser[] = response.data;
            dispatch(getUsersSuccess(data))
        }
        catch(err){
            dispatch(getUsersFail(err))
        }
    }
}

function getUsersInProgress():IGetUsersInProgressAction{
    return {
        type:keys.GET_USERS_INPROGRESS
    }
}

function getUsersSuccess(users:IUser[]):IGetUsersSuccessAction{
    return {
        type:keys.GET_USERS_SUCCESS,
        payload:{
            users
        }
    }
}

function getUsersFail(error:Error):IGetUsersFailAction{
    return {
        type:keys.GET_USERS_FAIL,
        payload:{
            error
        }
    }
}