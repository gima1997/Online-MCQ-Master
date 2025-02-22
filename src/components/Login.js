import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import GoogleLogin from "react-google-login";

class Login extends Component {

      responseGoogle=(response)=>{
          console.log(response);
          console.log(response.profileObj);
      }
    render() {
        return(
            <Router>
                <div className="Login">
                    <div className="App__Aside"></div>
                    <div className="App__Form">
                        <div className="FormTitle">
                            <h1>Online MCQ Master</h1>
                        </div>
                        <div className="PageSwitcher">
                            <a href="/sign-in" className="PageSwitcher__Item">Sign In</a>
                            <a href="sign-up/"  className="PageSwitcher__Item">Sign Up</a>
                        </div>
                        <div>
                        </div>
                        <br/>
                        <div className="second">
                            <GoogleLogin
                                clientId="271963913071-3uuk0lb7j7dq2q7vq2qlfnue4t515h0e.apps.googleusercontent.com"
                                buttonText="Login with google"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                disabled={false}
                               // isSignedIn={true}
                            />
                        </div>
                        <br/>
                        <br/>
                        <div>
                            <h5>
                                Sri Lankan Largest Online A/L Mcq Platform
                            </h5>
                        </div>
                    </div>
                </div>
            </Router>
    );
    }
}

export default Login;

