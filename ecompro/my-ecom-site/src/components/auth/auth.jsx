import React, { useState } from 'react'

const AuthForm = ({ onSignIn, onSignUp }) => {
    const [isSignIn, setIsSignIn] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignIn) {
            onSignIn({ email, password });
        } else {
            onSignUp({ email, password, username });
        }
    };
    return (
        <div className='auth-form'>
            <h3> {isSignIn ? 'Sign In' : 'Create Account'} </h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Username:
                    <input
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                {!isSignIn && (
                    <label>
                        Password:
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                )}
                <button type='submit'> {isSignIn ? 'Sign In' : 'Sign Up'} </button>
            </form>
            <button onClick={() => setIsSignIn(!isSignIn)}>
                {isSignIn ? 'Create Account' : 'Sign In with Account'}
            </button>
        </div>
    );
}

export default AuthForm;
