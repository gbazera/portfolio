function Contact() {
    return(
        <div className="container contact">
            <p className="heading">contact</p>
            <form>
                <input type="text" name="name" id="name" placeholder="name"/>
                <input type="email" name="email" id="email" placeholder="email"/>
                <textarea name="message" id="message" rows="8" placeholder="message"></textarea>
                <button className="btn" type="submit">send</button>
            </form>
        </div>
    );
}

export default Contact;