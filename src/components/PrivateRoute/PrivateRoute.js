import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin h-20 w-20 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => (
                user.uid ? children
                    : <Redirect
                        to={{
                            pathname: '/authentication',
                            state: { from: location }
                        }}>
                    </Redirect>
            )} />
    )
};

export default PrivateRoute;