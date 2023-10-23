import React, { useState } from 'react';
import Register from './welcome-exp/Register';
import Login from './welcome-exp/Login';

const Welcome = () => {
    const [isRegistering, setIsRegistering] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const toggleForm = () => {
        setIsRegistering(!isRegistering);
    };

    useEffect(() => {
        const checkIfUserIsAuthenticated = async () => {
          try {
            const response = await fetch('http://localhost:4000/api/checkAuth', {
              method: 'GET',
              credentials: 'include',
            });
    
            if (response.ok) {
              setIsAuthenticated(true);
            }
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        checkIfUserIsAuthenticated();
      }, []);

    if (isAuthenticated) {
    return <Redirect to="/dash" />;
    }

    return (
        <div className="welcome-page">

            <div className="side-content">
            </div>

            <div className="main-content">

                <h2>{isRegistering ? 'Sign up for Menage' : 'Sign in to Menage'}</h2>

                <div className="form-container">

                    {isRegistering ? <Register /> : <Login />}

                    <p onClick={toggleForm}>

                        {isRegistering ? 'Have an account? Click here.' :
                            'No account yet? Click here.'
                        }
                    </p>

                </div>

            </div>
            
        </div>
    );
}

export default Welcome;
