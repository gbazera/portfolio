import { useRef } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_186vif8', 'template_dafwv3s', form.current, 'IcDWwGsOHDjzv9ojI')
        .then((result) => {
            console.log(result.text);
            alert('message sent successfully :)');
        }, (error) => {
            console.log(error.text);
            alert('message was not sent :(');
        });
    };

    return(
        <div className="container contact">
            <p className="heading">contact</p>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="name"/>
                <input type="email" name="user_email" placeholder="email"/>
                <textarea name="message" rows="8" placeholder="message"></textarea>
                <button className="btn" type="submit">send</button>
            </form>
        </div>
    );
}

export default Contact;