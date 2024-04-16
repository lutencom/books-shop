import React, {useState} from "react";
import Masonry from "react-masonry-css";
import {ReactComponent as CloseIcon} from "../../Assets/shop-logos/circle-xmark-duotone.svg";
import './contact-form.style.scss'

const ContactForm = () => {
    const initialData = {
        userName: '',
        userFamily: '',
        userEmail: '',
        phoneNumber: '',
        message: ''
    }
    const [formData, getFormData] = useState(initialData)
    const [allData, getAllData] = useState([])

    const {userName, userFamily, userEmail, phoneNumber, message} = formData;
    const getData = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        getFormData({...formData, [name]: value})
    }
    const sendData = (e) => {
        e.preventDefault();
        getAllData(allData.concat(formData));
        getFormData(initialData)
    }
    const removeItem = (idx) => {
        getAllData(allData.filter((item, index) => item.index !== item.idx))
    }
    return (
        <>
            <form className='form' onSubmit={sendData} action="">
                <input value={userName} onChange={getData} type="text" name='userName'
                       placeholder='Your name here ...'/>
                <input value={userFamily} onChange={getData} type="text" name='userFamily'
                       placeholder='Your surname here ...'/>
                <input value={userEmail} onChange={getData} type="email" name='userEmail'
                       placeholder='Your email here ...'/>
                <input value={phoneNumber} onChange={getData} type="text" name='phoneNumber'
                       placeholder='Your phone number ...'/>
                <textarea value={message} onChange={getData} name="message" id="" cols="30" rows="10"
                          placeholder='Your message here ...'/>
                <button type='submit' className='button full'>Send</button>
            </form>
            <div className="inner-container">
                <Masonry
                    breakpointCols={2}
                    className="masonry-grid"
                    columnClassName="masonry-grid_column">
                    {

                        allData.map((field, idx) => {
                                return (
                                    <div className='card' key={idx}>
                                        <div onClick={() => removeItem(idx)} className="remove icon"><CloseIcon/></div>
                                        <ul className='list'>
                                            <li key={idx + 1}><span>Name</span>: {field.userName}</li>
                                            <li key={idx + 2}><span>Family</span>: {field.userFamily}</li>
                                            <li key={idx + 3}><span>Email</span>: {field.userEmail}</li>
                                            <li key={idx + 4}><span>Phone number</span>: {field.phoneNumber}</li>
                                            <li key={idx + 5}><span>Message</span>: {field.message}</li>
                                        </ul>
                                    </div>
                                )
                            }
                        )

                    }
                </Masonry>
            </div>
        </>
    )

}
export default ContactForm;