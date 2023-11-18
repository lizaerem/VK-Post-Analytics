import React, { useEffect, useState } from 'react';

const AuthButton = () => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/check-auth', {
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setAuthenticated(data.authenticated);
                } else {
                    setAuthenticated(false);
                }
            } catch (error) {
                console.error('Error checking authentication', error);
                setAuthenticated(false);
            }
        };

        checkAuthentication();
    }, []);

    const handleAuthClick = () => {
        if (authenticated) {
            // Add logout logic here (clear session, etc.)
            setAuthenticated(false);
        } else {
            window.location.href = 'http://localhost:3001/auth/vk';
        }
    };

    return (
        <div>
            <button onClick={handleAuthClick}>
                {authenticated ? 'Logout' : 'Login with VK'}
            </button>
        </div>
    );
};

export default AuthButton;
