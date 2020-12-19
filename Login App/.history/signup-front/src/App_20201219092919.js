import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
class App extends Component {
  constructor(){
     super()
     this.state={
       fullName:'',
       username:'',
       email:'',
       password:''
     }
  }
  render(){
    return(
      <div>
        <div className="container">
          <div className="form-div">
            <form>
              <input type="text" placeholder="Full Name" 
              onChange={this.changeFullName}
              value={this.state.fullName}
              className="form-control from-group"/>

              <input type="text" placeholder="Username"
                onChange={this.changeUsername}
                value={this.state.username}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default App;