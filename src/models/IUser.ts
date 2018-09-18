export default interface IUser {
    id:number,
    name:string,
    age:number
}

export interface UserApiResponse{
        readonly data : IUser[]
}

