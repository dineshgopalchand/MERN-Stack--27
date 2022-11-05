import React, { useState } from 'react'
import { useEffect } from 'react';
import treeImage from '../../../media/images/field_tree.jpg';
import classes from './ContactForm.module.css';

const initFormValue = {
    fullname: '',
    email: '',
    contact: '',
    subject: '',
    details: ''
};
const validateContactForm = (values) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    // please add more validation and refine it
    if (values.fullname.trim().length < 3) {
        errors.fullname = 'Full name is too short';
    } else if (!emailRegex.test(values.email)) {
        errors.email = 'Invalid email id';
    } else if (!phoneRegex.test(values.contact)) {
        errors.contact = 'Invalid Contact number';
    } else if (values.subject.trim().length < 5) {
        errors.subject = 'Subject is too short';
    } else if (values.details.trim().length < 20) {
        errors.details = 'Description is too short';
    }
    return errors;

}
const ContactForm = () => {

    const [formVal, setFormVal] = useState(initFormValue);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formSubmitSuccess, setFormSubmitStatus] = useState(false);

    const formSubmitHandler = e => {
        e.preventDefault();
        setFormErrors(validateContactForm(formVal));
        setIsSubmitting(true);
    }

    const submitForm = () => {
        console.log(formVal);
        setTimeout(()=>{
            setFormSubmitStatus(true);
        },3000);
    }
    const formFieldhandler = e => {
        const value = e.target.value;
        const fieldName = e.target.name;
        setFormVal(prev => {
            return { ...prev, [fieldName]: value }
        });
        setIsSubmitting(false);
    }
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submitForm();
        }
    }, [formErrors]);
    return (
        <div className="container">
            <div className="row my-5 ">
                <div className='col'>
                    <div className='card p-3 m-2 '>
                        {formSubmitSuccess ? (
                            <div className="alert alert-primary">Thank you for contacting us</div>
                        ) :
                            (
                                <form onSubmit={formSubmitHandler}>
                                    <div className={`form-group ${formErrors.fullname ? classes.errorfield : ''}`}>
                                        <label htmlFor="fullname">Full Name
                                            {
                                                formErrors.fullname &&
                                                <span className={classes.errordetails}> ( {formErrors.fullname} ) </span>
                                            }
                                        </label>
                                        <input type="text" name="fullname" value={formVal.fullname} className="form-control" id="fullname" placeholder='Enter full name' onChange={formFieldhandler} />

                                    </div>
                                    <div className={`form-group ${formErrors.email ? classes.errorfield : ''}`}>
                                        <label htmlFor="email">Email
                                            {
                                                formErrors.email &&
                                                <span className={classes.errordetails}> ( {formErrors.email} ) </span>
                                            }
                                        </label>
                                        <input type="email" name="email" value={formVal.email} className="form-control" id="email" placeholder='Enter email' onChange={formFieldhandler} />
                                    </div>
                                    <div className={`form-group ${formErrors.contact ? classes.errorfield : ''}`}>
                                        <label htmlFor="contact">Contact Number
                                            {
                                                formErrors.contact &&
                                                <span className={classes.errordetails}> ( {formErrors.contact} ) </span>
                                            }
                                        </label>
                                        <input type="tel" name="contact" value={formVal.contact} className="form-control" id="contact" onChange={formFieldhandler} />
                                    </div>
                                    <div className={`form-group ${formErrors.subject ? classes.errorfield : ''}`}>
                                        <label htmlFor="subject">Subject
                                            {
                                                formErrors.subject &&
                                                <span className={classes.errordetails}> ( {formErrors.subject} ) </span>
                                            }
                                        </label>
                                        <input type="text" name="subject" className="form-control" value={formVal.subject} id="subject" placeholder='Enter subject' onChange={formFieldhandler} />
                                    </div>
                                    <div className={`form-group ${formErrors.details ? classes.errorfield : ''}`}>
                                        <label htmlFor="details">Description
                                            {
                                                formErrors.details &&
                                                <span className={classes.errordetails}> ( {formErrors.details} ) </span>
                                            }
                                        </label>
                                        <textarea name="details" id="details" rows="5" className="form-control" placeholder='Please mention full details' value={formVal.details} onChange={formFieldhandler}></textarea>
                                    </div>
                                    <div className="form-group m-2">
                                        <button className="btn btn-primary form-control" disabled={isSubmitting}>Submit</button>
                                    </div>
                                </form>
                            )
                        }
                    </div>
                </div>
                <div className="col  m-2">
                    <h3>Contact Form</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum, tempora sit distinctio facere odit adipisci quos omnis ratione! Cum pariatur qui quisquam eos laudantium, dignissimos voluptatibus sit dolorum dolores?</p>
                    <img className={classes['contact-image']} src={treeImage} alt="natural scene" />
                </div>
            </div>
        </div >

    )
}

export default ContactForm