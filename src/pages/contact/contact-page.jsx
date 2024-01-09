import React from 'react';
import './contact.page.scss';
import ContactForm from "../../components/contact-form/contact-form.component";


const ContactPage = () => {
    return (
        <div className="container">
            <div className="inner-container grid">
                <div className="col-1">
                    <h1>Contact page</h1>
                </div>
                <div className="col-1-2"><ContactForm/></div>

            </div>
        </div>
    )
}
export default ContactPage;