//import IUsers from "../models/IUser";
import IUser from "../models/IUser";

export default interface IStoreState {
    readonly users : {
        readonly users : IUser[]
    }
}




