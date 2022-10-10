import react, { useState } from 'react';
import ModelBox from '../../UI/modelBox/ModelBox';
// import { FormInput, FormResetButton, FormSubmitButton } from '../../UI/FormElements';
import formStyle from './ContactForm.module.css';

const ContactForm = () => {
    const [formInput, setFormInput] = useState({
        uname: {},
        email: {},
        phone: {},
        subject: {}
    });
    const [showModel, setShowModel] = useState(false);
    const formInputHandler = (event) => {
        const inputVal = event.target.value.trim();
        const fieldName = event.target.name;
        // console.log(fieldName);
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
    const contactFormHandler = (event) => {
        event.preventDefault();
        if (formInput.email.error || formInput.uname.error || formInput.phone.error || formInput.subject.error || formInput.email.value === '') {
            return false;
        }
        // console.log(formInput);
        setShowModel(true);
    }

    const onConfirmHandler = (isConfirmed) => {
        setShowModel(false);
        console.log(isConfirmed, showModel);
        if (isConfirmed) {
            // do some other operation
        }
    }
    return (
        <>
            {
                showModel
                && <ModelBox onConfirm={onConfirmHandler} >
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>{formInput.uname.value}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{formInput.email.value}</td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>{formInput.phone.value}</td>
                            </tr>
                            <tr>
                                <th>Subject</th>
                                <td>{formInput.subject.value}</td>
                            </tr>
                        </tbody>
                    </table>
                </ModelBox>
            }
            <form className='mt-3' onSubmit={contactFormHandler}>
                <div className={`${formStyle['form-element']} ${formInput.uname?.error ? formStyle.invalid : ''}`}>
                    <label htmlFor="uname" >Enter Your Name</label>
                    <input type="text" id="uname" name="uname" className={`${formStyle['form-field']}`} placeholder="Enter your name" onChange={formInputHandler} />
                </div>
                <div className={`${formStyle['form-element']} ${formInput.email?.error ? formStyle.invalid : ''}`}>
                    <label htmlFor="email" >Enter Your Email</label>
                    <input type="email" id="email" name="email" className={`${formStyle['form-field']}`} placeholder="Enter your email" onChange={formInputHandler} />
                </div>
                <div className={`${formStyle['form-element']} ${formInput.phone?.error ? formStyle.invalid : ''}`}>
                    <label htmlFor="phone" >Enter Your Contact Number</label>
                    <input type="tel" id="phone" name="phone" className={`${formStyle['form-field']}`} placeholder="Enter your contact number" onChange={formInputHandler} />
                </div>
                <div className={`${formStyle['form-element']} ${formInput.subject?.error ? formStyle.invalid : ''}`}>
                    <label htmlFor="subject" >Enter Subject</label>
                    <input type="text" id="subject" name="subject" className={`${formStyle['form-field']}`} placeholder="Enter your subject" onChange={formInputHandler} />
                </div>
                <div>
                    <button className={`${formStyle.button}`} type="submit" >Submit</button>
                </div>
            </form>
        </>
    )
};
export default ContactForm;