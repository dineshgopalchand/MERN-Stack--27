import react, { useState } from 'react';
import { FormInput, FormSubmitButton } from '../../UI/FormElements';
// import './ContactForm.css';

const ContactForm = () => {
    const [formInput, setFormInput] = useState({
        // uname:{},
        // email:{},
        // phone:{},
        // subject:{}
    });
    console.log(formInput);
    const formInputHandler = (event) => {
        const inputVal = event.target.value.trim();
        const fieldName = event.target.name;
        console.log(fieldName);
        let error = false;
        if (inputVal.length < 5) {
            error = true;
        }


        setFormInput((prevState) => {
            return {
                ...prevState,
                [fieldName]: {
                    ...prevState[fieldName],
                    value: inputVal,
                    error
                }
            }
        });

    }
    return (
        <form >
            <FormInput className={formInput.uname?.error ? 'invalid' : ''} >
                <label htmlFor="uname" >Enter Your Name</label>
                <input type="text" id="uname" name="uname" className="form-field" placeholder="Enter your name" onChange={formInputHandler} />
            </FormInput>
            <FormInput className={formInput.email?.error ? 'invalid' : ''}>
                <label htmlFor="email">Enter Your Email</label>
                <input type="email" id="email" name="email" className="form-field" placeholder="Enter your email" onChange={formInputHandler} />
            </FormInput>
            <FormInput className={formInput.phone?.error ? 'invalid' : ''}>
                <label htmlFor="phone">Enter Your Contact Number</label>
                <input type="tel" id="phone" name="phone" className="form-field" placeholder="Enter your contact number" onChange={formInputHandler} />
            </FormInput>
            <FormInput className={formInput.subject?.error ? 'invalid' : ''}>
                <label htmlFor="subject">Enter Subject</label>
                <input type="text" id="subject" name="subject" className="form-field" placeholder="Enter your subject" onChange={formInputHandler} />
            </FormInput>
            <FormInput>
                <FormSubmitButton type="submit" >Submit</FormSubmitButton>
            </FormInput>
        </form>
    )
};
export default ContactForm;