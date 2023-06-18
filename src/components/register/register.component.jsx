import React from "react";
import './register.component.scss';
import {useState, useContext} from "react";
import FormInput from "../form-input/form-input.component";
import {createUserWithEmailAndPasswordCustom, createUserDocumentFromAuth} from "../firebase/firebase.utils";
// import {UserContext} from "../contexts/user.context";

// obiect cu valori initiale, care serveste ca State initial
const initialFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}
const Register = () => {

    // Adaugam state prin hook, "formFields" e proprietatea care primeste ca valoare obiectul cu valori initiale "initialFormFields"
    const [formFields, setFormFields] = useState(initialFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const handlechange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }
    const resetFormFields = () => setFormFields(initialFormFields);

    // const {setCurrentUser} = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("The passwords do not match!");
            return;
        }
        try {
            const {user} = await createUserWithEmailAndPasswordCustom(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            // setCurrentUser(user);
            resetFormFields();
            alert('The account has been successfully created.')
        } catch (e) {
            if (e.code === "auth/email-already-in-use") {
                alert('The email is already in use. Use another email.');
            } else {
                console.log('There is an error while adding data to database', e.message)
            }
        }
    }
    return (
        <div className="register form">
            <h2>Register form</h2>
            <form onSubmit={handleSubmit}>
                <FormInput type='text'
                           name='displayName'
                           value={displayName}
                           label='Your name'
                           required
                           onChange={handlechange}
                />
                <FormInput type='email'
                           name='email'
                           value={email}
                           label='Your email'
                           required
                           onChange={handlechange}
                />
                <FormInput type='password'
                           name='password'
                           label='Your password'
                           value={password}
                           onChange={handlechange}
                />
                <FormInput type='password'
                           name='confirmPassword'
                           label='Confirm the password'
                           value={confirmPassword}
                           onChange={handlechange}
                />
                <input className='button full' type="submit" value="Register"/>
            </form>
        </div>

    )
}
export default Register;