import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Navbar.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        to_name: 'Steve Arnold',  // Default value, change as needed
        from_name: '',
        from_email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        emailjs.send(
            'service_o5sas8s',
            'template_g1fdrsw',
            formData,
            'Xvu4MHwQd0zJ4NCg8'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setStatus('Message sent successfully!');
            setFormData({ to_name: 'Recipient', from_name: '', from_email: '', subject: '', message: '' });
        }, (error) => {
            console.log('FAILED...', error);
            setStatus('Failed to send message. Please try again.');
        });
    };

    return (
        <div className="bg-dark text-light min-vh-100 p-4">
            <div className="container">
                <main className="text-start">
                    <h1 className="mb-4">Contact Us</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="from_name" className="form-label">Your Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="from_name"
                                name="from_name"
                                value={formData.from_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="from_email" className="form-label">Your Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="from_email"
                                name="from_email"
                                value={formData.from_email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input
                                type="text"
                                className="form-control"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                    {status && <p className="mt-3">{status}</p>}
                </main>
            </div>
        </div>
    );
}

export default Contact;