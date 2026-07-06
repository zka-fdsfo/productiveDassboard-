import React, { useState, useMemo } from 'react'

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const [authReady, setAuthReady] = useState(false);

    const value = useMemo(() => ({
        user,
        setUser,
        loading,
        setLoading,
        authReady,
    }), [user, loading, authReady]);
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext