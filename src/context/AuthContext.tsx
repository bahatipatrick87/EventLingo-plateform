"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthContextType {
    isLoggedIn: boolean;
    user: User | null;
    token: string | null;
    login: (email: string, password: string) => Promise<boolean>;
    signup: (name: string, email: string, password: string) => Promise<boolean>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);

    // Load auth state from localStorage on mount
    useEffect(() => {
        const storedToken = localStorage.getItem('eventlingo_token');
        const storedUser = localStorage.getItem('eventlingo_user');

        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
        }
    }, []);

    const login = async (email: string, password: string): Promise<boolean> => {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                console.error('Login failed:', data.error);
                alert(data.error || 'Login failed');
                return false;
            }

            // Store token and user data
            setToken(data.token);
            setUser(data.user);
            setIsLoggedIn(true);
            localStorage.setItem('eventlingo_token', data.token);
            localStorage.setItem('eventlingo_user', JSON.stringify(data.user));

            return true;
        } catch (error) {
            console.error('Login error:', error);
            alert('An error occurred during login');
            return false;
        }
    };

    const signup = async (name: string, email: string, password: string): Promise<boolean> => {
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                console.error('Signup failed:', data.error);
                alert(data.error || 'Signup failed');
                return false;
            }

            // Store token and user data
            setToken(data.token);
            setUser(data.user);
            setIsLoggedIn(true);
            localStorage.setItem('eventlingo_token', data.token);
            localStorage.setItem('eventlingo_user', JSON.stringify(data.user));

            return true;
        } catch (error) {
            console.error('Signup error:', error);
            alert('An error occurred during signup');
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        setIsLoggedIn(false);
        localStorage.removeItem('eventlingo_token');
        localStorage.removeItem('eventlingo_user');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, token, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
