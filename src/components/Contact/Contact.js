import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const submit = () => {
        if (name && email && message) {
            // TODO - send mail
            const serviceId = 'service_ucpm1jj';
            const templateId = 'template_1fxjmzr';
            const userId = '5CVhrz6zOOQ9djik1';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    return (
        <div className='flex flex-col justify-center items-center bg-primary'>
            <h1 className='text-3xl mt-6 font-bold mb-5'>Contact me</h1>
            <div className='p-3'>
                <div class="form-control w-full max-w-xs mb-3">
                    <input class="input input-bordered w-full max-w-xs" type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div class="form-control w-full max-w-xs  mb-3">
                    <input class="input input-bordered w-full max-w-xs" type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div class="form-control w-full max-w-xs  mb-3">
                    <textarea class="textarea textarea-bordered h-24" placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                </div>
                <div class="form-control w-full max-w-xs  mb-3">
                    <button class="btn btn-info btn-sm" onClick={submit}>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;