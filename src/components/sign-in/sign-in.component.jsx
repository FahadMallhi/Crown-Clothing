import { Component } from "react";
import {  createUserProfile, signInWithGoogle } from "../../sheared/firebase/auth";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import AppButtan from "../App-bottan/appbottan.component";
import { Appinput } from "../App-input/appinput.component";

import '../sign-up/sign-up.styles.scss';

export class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }


    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event, email, password) => {
        event.preventDefault();

        // auth.signInWithEmailAndPassword(email, password)

        // createUserWithEmailAndPassword(auth, email, password)

        createUserProfile({
            email: 'fahid@gmail.com',
            displayName: 'Fahid'
        }, {})
    };
    render() {
        return (
            <div className="signin-style">
                <h3>I already have an account</h3>
                <span>sign in with your email or password</span>
                <form onSubmit={this.handleSubmit} method='post' >
                    <Appinput
                        name='email'
                        type={'Email'}
                        label={'email'}
                        value={this.props.email}
                        handleChange={this.handleChange}
                        required={true}
                    />
                    <Appinput name='password'
                        type={'Password'}
                        label={'password'}
                        value={this.props.password}
                        handleChange={this.handleChange}
                        required={true}
                    />
                    <div className="button-style">
                    <AppButtan type="submit"> Sign in </AppButtan>
                    <AppButtan
                        type="button"
                        onClick={signInWithGoogle}
                        isGoogleSignIn
                    >
                        Sign in with Google
                    </AppButtan>
                    </div>
                    
                </form>
            </div>
        )
    }
}