import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function ContactUs() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            message: Yup.string()
                .min(10, 'Message must be at least 10 characters')
                .required('Message is required')
        }),
        onSubmit: (values, { resetForm }) => {
            // Handle form submission (e.g., send values to a server)
            console.log('Form submitted:', values);
            resetForm();
            alert('Message sent successfully!');
        }
    });

    return (
        <div className="container mt-4">
            <h2>Contact Us</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="text-danger">{formik.errors.name}</div>
                    ) : null}
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="text-danger">{formik.errors.email}</div>
                    ) : null}
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        rows="4"
                    />
                    {formik.touched.message && formik.errors.message ? (
                        <div className="text-danger">{formik.errors.message}</div>
                    ) : null}
                </div>

                <button type="submit" className="btn btn-primary">
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default ContactUs;
