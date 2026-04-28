import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const api = axios.create({
        baseURL: 'http://localhost:3000/api/users',
        withCredentials: true
    });

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const { data } = await api.get('/profile');
                setUser(data.user);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    const login = async (email, password) => {
        const { data } = await api.post('/login', { email, password });
        setUser(data.user);
        return data;
    };

    const register = async (name, email, password) => {
        const { data } = await api.post('/register', { name, email, password });
        setUser(data.user);
        return data;
    };

    const logout = async () => {
        await api.post('/logout');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading, api }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
