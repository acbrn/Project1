import React from 'react';
import { useForm, ValidationError } from '@formspree/react';



function ServiceForm() {
    const [state, handleSubmit] = useForm("xpzvkvnw");
    if (state.succeeded) {
        return <p>
            Thank you for your submission! We will be in touch soon.
        </p>
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
                placeholder='example@mail.com'
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                style={{width: '100%', padding: '20px'}}
                placeholder="How can we help you?" 
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

export default ServiceForm;