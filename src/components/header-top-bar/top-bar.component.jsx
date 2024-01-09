import React, {useContext} from 'react';
import './top-bar.component.scss';
import {auth, createUserDocumentFromAuth, signOutCustom} from '../firebase/firebase.utils';
import {Link} from 'react-router-dom';
import {UserContext} from "../contexts/user.context";
import {ReactComponent as LogIn} from "../../Assets/shop-logos/right-to-bracket-duotone.svg";
import {ReactComponent as LogOut} from "../../Assets/shop-logos/right-from-bracket-duotone.svg";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../store/user/user.selector";



const TopBar = () => {
    const currentUser = useSelector(selectCurrentUser)
    const signOutHandler = async () => {
        await signOutCustom();
    }
    return (
        <div className="top-bar full-width">
            <div className="container">
                <div className="inner-container grid">
                    {currentUser ?
                        <div className='col-1 content-right-aligned'>
                            <span>Hello, {currentUser.displayName}</span>
                            <img referrerPolicy="no-referrer" className='user-photo' src={currentUser.photoURL}
                                 alt=""/>
                            <a className='menu-item sign-out icon' onClick={signOutHandler}> <LogOut/></a>
                        </div>
                        :
                        <div className='col-1 content-right-aligned'>
                            <Link to={"/account"} className='menu-item account-menu-item icon'>
                                <LogIn />
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default TopBar;