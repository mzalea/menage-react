import React, { useState } from 'react';
import Register from './welcome-exp/Register';
import Login from './welcome-exp/Login';

const Welcome = () => {
    const [isRegistering, setIsRegistering] = useState(true);

    const toggleForm = () => {
        setIsRegistering(!isRegistering);
    };

    return (
        <div className="form-container">
            {isRegistering ? <Register /> : <Login />}
            <p onClick={toggleForm}>{isRegistering ?
                'Have an account? Click here.' :
                'No account yet? Click here.'}
            </p>
        </div>
    );
}

export default Welcome;
