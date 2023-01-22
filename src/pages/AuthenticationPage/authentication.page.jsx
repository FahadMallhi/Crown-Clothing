
import { Component } from "react";
import { SignIn } from "../../components";
import { SignUp } from "../../components/sign-up/sign-up.component";

import '../AuthenticationPage/authentication.style.scss';

export class Authentication extends Component {
    render() {
        {console.log('Authentication.js')}
        return (
            <div className='auth-style'>
                <SignIn />
                <SignUp user={this.props.user}/>
            </div>
        )
    }
}