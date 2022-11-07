import React, { useState } from 'react'
import { useEffect } from 'react';
import treeImage from '../../../media/images/field_tree.jpg';
import classes from './ContactForm.module.css';
import { Formik } from 'formik';
import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const ContactFormSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required').min(3, 'Fullname is too short').max(40, 'fullname is too long'),
    email: Yup.string().email('Invalid email').required("Email is required"),
    contact: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),
    subject: Yup.string().min(5, 'Subject is too short').required('Subject is required'),
    details: Yup.string().min(20, 'Description is too short').required('Description is required')
});

const initFormValue = {
    fullname: '',
    email: '',
    contact: '',
    subject: '',
    details: ''
};
// const validateContactForm = (values) => {
//     const errors = {};
//     const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
//     const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

//     // please add more validation and refine it
//     if (values.fullname.trim().length < 3) {
//         errors.fullname = 'Full name is too short';
//     }
//     if (!emailRegex.test(values.email)) {
//         errors.email = 'Invalid email id';
//     }
//     if (!phoneRegex.test(values.contact)) {
//         errors.contact = 'Invalid Contact number';
//     }
//     if (values.subject.trim().length < 5) {
//         errors.subject = 'Subject is too short';
//     }
//     if (values.details.trim().length < 20) {
//         errors.details = 'Description is too short';
//     }
//     return errors;

// }
const ContactForm = () => {
    const [formSubmitSuccess, setFormSubmitStatus] = useState(false)



    const submitForm = (values) => {
        console.log(values);
        setTimeout(() => {
            setFormSubmitStatus(true);
        }, 3000);
    }

    return (
        <Formik
            initialValues={initFormValue}
            validationSchema={ContactFormSchema}
            // validate={validateContactForm}
            onSubmit={submitForm}
        >
            {({
                values,
                isValid,
                errors,
                touched,
                dirty,
                handleChange,
                handleBlur,
                handleSubmit
            }) => {

                return (
                    <div className="container">
                        <div className="row my-5 ">
                            <div className='col'>
                                <div className='card p-3 m-2 '>
                                    {formSubmitSuccess ? (
                                        <div className="alert alert-primary">Thank you for contacting us</div>
                                    ) :
                                        (
                                            <form onSubmit={handleSubmit}>
                                                <div className={`form-group ${errors.fullname && touched.fullname ? classes.errorfield : ''}`}>
                                                    <label htmlFor="fullname">Full Name
                                                        {
                                                            errors.fullname && touched.fullname &&
                                                            <span className={classes.errordetails}> ( {errors.fullname} ) </span>
                                                        }
                                                    </label>
                                                    <input type="text" name="fullname" value={values.fullname} className="form-control" id="fullname" placeholder='Enter full name' onChange={handleChange} onBlur={handleBlur} />

                                                </div>
                                                <div className={`form-group ${errors.email && touched.email ? classes.errorfield : ''}`}>
                                                    <label htmlFor="email">Email
                                                        {
                                                            errors.email && touched.email &&
                                                            <span className={classes.errordetails}> ( {errors.email} ) </span>
                                                        }
                                                    </label>
                                                    <input type="email" name="email" value={values.email} className="form-control" id="email" placeholder='Enter email' onChange={handleChange} onBlur={handleBlur} />
                                                </div>
                                                <div className={`form-group ${errors.contact && touched.contact ? classes.errorfield : ''}`}>
                                                    <label htmlFor="contact">Contact Number
                                                        {
                                                            errors.contact && touched.contact &&
                                                            <span className={classes.errordetails}> ( {errors.contact} ) </span>
                                                        }
                                                    </label>
                                                    <input type="tel" name="contact" value={values.contact} className="form-control" id="contact" onChange={handleChange} onBlur={handleBlur} />
                                                </div>
                                                <div className={`form-group ${errors.subject && touched.subject ? classes.errorfield : ''}`}>
                                                    <label htmlFor="subject">Subject
                                                        {
                                                            errors.subject && touched.subject &&
                                                            <span className={classes.errordetails}> ( {errors.subject} ) </span>
                                                        }
                                                    </label>
                                                    <input type="text" name="subject" className="form-control" value={values.subject} id="subject" placeholder='Enter subject' onChange={handleChange} onBlur={handleBlur} />
                                                </div>
                                                <div className={`form-group ${errors.details && touched.details ? classes.errorfield : ''}`}>
                                                    <label htmlFor="details">Description
                                                        {
                                                            errors.details && touched.details &&
                                                            <span className={classes.errordetails}> ( {errors.details} ) </span>
                                                        }
                                                    </label>
                                                    <textarea name="details" id="details" rows="5" className="form-control" placeholder='Please mention full details' value={values.details} onChange={handleChange} onBlur={handleBlur}></textarea>
                                                </div>
                                                <div className="form-group m-2">
                                                    <button className="btn btn-primary form-control" disabled={!(dirty && isValid)}>Submit</button>
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
                    </div>
                )
            }}

        </Formik>


    )
}

export default ContactForm