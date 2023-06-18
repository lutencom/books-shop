import React from 'react';
import './account.component.scss';
import '../../components/sign-in/sign-in.component';
// import SignIn from "../../components/sign-in/sign-in.component";
import SignInHook from "../../components/sign-in/sign-in.component-hook";
import Register from "../../components/register/register.component";

const AccountPage = () => {
    return (
        <div className="container">
            <div className="inner-container grid">
                <div className="col-1">
                    <h1>My account page</h1>
                </div>
                <div className="col-1-2"><SignInHook/></div>
                <div className="col-1-2"><Register/></div>
            </div>
        </div>
    )
}
export default AccountPage;