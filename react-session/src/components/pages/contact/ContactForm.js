import { useState, useRef } from 'react';
import ModelBox from '../../UI/modelBox/ModelBox';
// import { FormInput, FormResetButton, FormSubmitButton } from '../../UI/FormElements';
import formStyle from './ContactForm.module.css';

const ContactForm = () => {

    const unameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const subjectRef = useRef();


    const [showModel, setShowModel] = useState(false);

    const contactFormHandler = (event) => {
        event.preventDefault();
        if (unameRef.current.value === '' || emailRef.current.value === '' || phoneRef.current.value === '' || subjectRef.current.value === '') {
            return false;
        }
        // console.log(formInput);
        setShowModel(true);
    }

    const onConfirmHandler = (isConfirmed) => {
        setShowModel(false);
        console.log(isConfirmed, showModel);
        if (isConfirmed) {
            // some API call will be there
            unameRef.current.value = '';
            emailRef.current.value = '';
            phoneRef.current.value = '';
            subjectRef.current.value = '';
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
                                <td>{unameRef.current.value}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{emailRef.current.value}</td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>{phoneRef.current.value}</td>
                            </tr>
                            <tr>
                                <th>Subject</th>
                                <td>{subjectRef.current.value}</td>
                            </tr>
                        </tbody>
                    </table>
                </ModelBox>
            }
            <form className='mt-3' onSubmit={contactFormHandler}>
                <div className={`${formStyle['form-element']} `}>
                    <label htmlFor="uname" >Enter Your Name</label>
                    <input type="text" id="uname" name="uname" className={`${formStyle['form-field']}`} placeholder="Enter your name" ref={unameRef} />
                </div>
                <div className={`${formStyle['form-element']}`}>
                    <label htmlFor="email" >Enter Your Email</label>
                    <input type="email" id="email" name="email" className={`${formStyle['form-field']}`} placeholder="Enter your email" ref={emailRef} />
                </div>
                <div className={`${formStyle['form-element']} `}>
                    <label htmlFor="phone" >Enter Your Contact Number</label>
                    <input type="tel" id="phone" name="phone" className={`${formStyle['form-field']}`} placeholder="Enter your contact number" ref={phoneRef} />
                </div>
                <div className={`${formStyle['form-element']} `}>
                    <label htmlFor="subject" >Enter Subject</label>
                    <input type="text" id="subject" name="subject" className={`${formStyle['form-field']}`} placeholder="Enter your subject" ref={subjectRef} />
                </div>
                <div>
                    <button className={`${formStyle.button}`} type="submit" >Submit</button>
                </div>
            </form>
        </>
    )
};
export default ContactForm;