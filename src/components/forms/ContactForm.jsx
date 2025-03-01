import "./ContactForm.css";

function ContactForm() {
    return (
        <>
            <form action="https://formsubmit.co/9cbd80d6cabd97a9392bf66804ed2353" method="POST">
                {/* honeypot -> <input type="text" name="_honey" style="display: none;"> Disable Captcha -> <input type="hidden" name="_captcha" value="false"> */}
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="name" id="firstName" placeholder="First name" required />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="last&nbsp;name" id="lastName" placeholder="Last name" required />
                <label htmlFor="email">Contact email</label>
                <input type="text" name="email" id="email" placeholder="Type your email address" required />
                <label htmlFor="message">Message:</label>
                <textarea name="message" id="message" rows="5" placeholder="Type your message here" required />
                <button type="submit" className="btn">Submit message</button>
            </form>
        </>
    )
}
export default ContactForm;