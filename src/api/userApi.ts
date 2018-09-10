import IUsers from '../models/IUsers';
import ApiError from './ApiError';

export async function getUsers() : Promise<IUsers>{
    const requestUrl = 'localhost:8080/users'
    
    const response = await fetch(requestUrl);

    if(response.ok){
        return await response.json()
    }
    else{
        throw new ApiError(response.status,response.statusText)
    }

    
}