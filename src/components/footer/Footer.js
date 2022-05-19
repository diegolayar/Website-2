import "./Footer.css"
import "../../App.css"
import React, { useRef, useState } from 'react';
import { Link, usesHistory } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Footer = () => {

    const form = useRef();  

    const [showStatus, setShowStatus] = useState(true);
    const [emailStatus, setEmailStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setShowStatus(true);
        setEmailStatus("Sending email...");
        emailjs
            .sendForm('service_an9crf8', 'template_m3o1g9b', form.current, 'eH6MoGX2Q4oAP6Bjh')
            .then(
                (result) => {
                    setEmailStatus("Email sent successfully!");
                }, 
                (error) => {
                    setEmailStatus("Failed to send email, please try again later.");
                }
            );
      };

    return (
        <div id='footer'>
            <div id='form-parent'>
                <p>
                    I’m interested in registering my child(ren) for a TheraSpanish class.
                </p>
                <form id="email-form" ref={form} onSubmit={sendEmail}>
                    <input id="email-textfield" type="email" placeholder="Enter your email here*" name="user_email" />
                    {
                        showStatus && <p>{emailStatus}</p>
                    }
                    <input id='send-button' type="submit" value="REGISTER" />
                </form>
            </div>
            <div id='contact-info-parent'>
                <p>Phone number: +965 65881439</p>
                <p>Email: theraspanishplay@gmail.com</p>
                <p>@theraspanishplay</p>
            </div>
        </div>
    );
}

export default Footer;