import "./ContactForm.css";

function ContactForm() {
    return (
        <>
            <form action="https://formsubmit.co/9cbd80d6cabd97a9392bf66804ed2353" method="POST">
                {/* Honeypot for spammers */}
                <input type="text" name="_honey" className="_honey" />
                {/* Remove captcha as honeypot above should prevent this */}
                <input type="hidden" name="_captcha" value="false" />
                {/* Setting up re-direct to custom success page */}
                <input type="hidden" name="_next" value="https://mandydcook.com/success-message" />

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