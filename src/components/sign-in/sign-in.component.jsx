import React from "react";
import './sign-in.component.scss';
import FormInput from "../form-input/form-input.component";
import {signInWithGoogle} from '../firebase/firebase.utils';
class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            'email': "",
            'password': ""
        }
        this.handleSubmit = event => {
            event.preventDefault();
            this.setState({
                'email': "",
                'password': ""
            })
            console.log(this.state);
        }
        this.handleChange = event => {
            const {name, value} = event.target;
            this.setState({
                [name]: value
            })

        }
    }

    render() {
        return (
            <div className='sign-in form'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <h2>Sign in!</h2>
                    <FormInput type='email'
                           name='email'
                           value={this.state.email}
                           label='Your email'
                           required
                           handleChange={this.handleChange}
                    />
                    <FormInput type='password'
                           name='password'
                           label='Your password'
                           value={this.state.password}
                           handleChange={this.handleChange}
                    />
                    <input className='button full' type="submit" value="Log in"/>
                    <a onClick={signInWithGoogle} className="button outline margin-left">Sign in with Google</a>
                </form>
            </div>
        )
    }
}


export default SignIn;