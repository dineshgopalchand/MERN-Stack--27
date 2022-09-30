import react from 'react';
import { FormElement,FormSubmitButton } from '../../UI/FormStyle';
// import './ContactForm.css';

const ContactForm = () => {
    return (
        <form>

            <FormElement >
                <label  htmlFor="uname">Enter Your Name</label>
                <input type="text" id="uname" className="form-field" placeholder="Enter your name" />
            </FormElement>
            <FormElement>
                <label htmlFor="email">Enter Your Email</label>
                <input type="email" id="email" className="form-field" placeholder="Enter your email" />
            </FormElement>
            <FormElement>
                <label htmlFor="phone">Enter Your Contact Number</label>
                <input type="tel" id="phone" className="form-field" placeholder="Enter your contact number" />
            </FormElement>
            <FormElement >
                <label htmlFor="subject">Enter Subject</label>
                <input type="text" id="subject" className="form-field" placeholder="Enter your subject" />
            </FormElement>
            <FormElement>
                <FormSubmitButton type="submit" >Submit</FormSubmitButton>
            </FormElement>
        </form>
    )
};
export default ContactForm;