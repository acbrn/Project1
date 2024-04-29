import React from 'react';
import { useForm, ValidationError } from '@formspree/react';



function ContactForm() {
    const [state, handleSubmit] = useForm("xpzvkvnw");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>
    }
    if (state.errors) {
        return (
            <p>
                {state.errors[0].message}
            </p>
        );
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email" 
                name="email"
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <div className='services-form-button'>
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
            </div>
        </form>
    );
}

export default ContactForm;