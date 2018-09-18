import * as React from 'react';
//import SVG from 'react-inlinesvg';
import './App.scss';
import {connect} from "react-redux";
import { Dispatch, bindActionCreators } from 'redux';
import IUser from './models/IUser';
import {UserApiResponse} from './models/IUser';
import getUsers from './actions/users/usersAction';
import IStoreState from './store/IStoreState';
//import {IGetUsersSuccessAction} from "../src/actions/user/get"

//import logo from './logo.svg';



interface IAppProps{
 readonly users : {
   readonly users : IUser[]
 },
 getUsers : ()=>(
  dispatch:Dispatch<UserApiResponse>
  )=>Promise<void>
}


class App extends React.Component<IAppProps> {
  constructor(props:IAppProps){
    super(props)
  }

  componentDidMount(){
    this.props.getUsers();
  }

  displayUsers(){
    let data = this.props.users;
    let {users} = data;
    if(users.length > 0){
      let d = users.map((ele:IUser)=><li key={ele.id}>{ele.name}</li>)
      return <ul>{d}</ul>
    }else{
      return <div>Loading....</div>
    }
  }
  
  public render() {
    return (
      <div className="App">
        <header className="App-header">
            
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
          
        </p>
        {this.displayUsers()}
      </div>
    );
  }
}

function mapStateToProps(state:IStoreState){
  //console.log(state)
  return{
    users:state.users
  }
}

function mapDispatchToProps(dispatch:Dispatch<UserApiResponse>){
  return {
    getUsers : bindActionCreators(getUsers,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)

