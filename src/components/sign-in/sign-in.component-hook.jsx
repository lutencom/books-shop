import React from "react";
import './sign-in.component.scss';
import FormInput from "../form-input/form-input.component";
import {signInWithGoogle, createUserDocumentFromAuth, signInWithEmailAndPasswordCustom} from '../firebase/firebase.utils';
import {useState, useContext} from "react";
import {UserContext} from "../contexts/user.context";

const SignInHook = () => {
    // const {setCurrentUser} = useContext(UserContext);

    const logGoogleUser = async () => {
        await signInWithGoogle();
    }

    const initialFields = {
        email: "",
        password: ""
    }

    const resetForm = () => setFields(initialFields);

    const [allFields, setFields] = useState(initialFields);

    const {email, password} = allFields;

    const handleChanger = event => {
        const {name, value} = event.target;
        setFields({...allFields, [name]: value})
    }

    const HandleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInWithEmailAndPasswordCustom(email, password);
            // setCurrentUser(user);
            alert('Sign in successfully!')

            resetForm();
        } catch (e) {
            if (e.code === "auth/user-not-found") {
                alert('Please, enter the correct email address.');
            } else if (e.code === 'auth/wrong-password') {
                alert('Please, enter the correct password.')
            }
            console.log(e);
        }
    }

    return (
        <div className='sign-in form'>
            <form className='form' onSubmit={HandleSubmit}>
                <h2>Sign in with your name and password!</h2>
                <FormInput type='email'
                           name='email'
                           value={email}
                           label='Your email'
                           required
                           onChange={handleChanger}
                />
                <FormInput type='password'
                           name='password'
                           label='Your password'
                           value={password}
                           onChange={handleChanger}
                />
                <input className='button full' type="submit" value="Log in"/>
                <a onClick={logGoogleUser} className="button outline margin-left">Sign in with Google</a>
            </form>
        </div>
    )
}

export default SignInHook;