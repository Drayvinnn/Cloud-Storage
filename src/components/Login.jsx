import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            setErrorMessage(error.message);
        } else {
            alert("Login successful!");
            navigate("/dashboard");
        }
    };

    return (
        <div 
            className="flex items-center justify-center min-h-screen bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560807707-8cc77767d783?w=1600')" }}
        >
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-xl rounded-3xl bg-opacity-90">
                <h2 className="text-3xl font-extrabold text-center text-gray-900">Welcome Back</h2>
                {errorMessage && (
                    <p className="text-center text-sm text-red-500">{errorMessage}</p>
                )}
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 text-white font-semibold bg-yellow-500 rounded-lg hover:bg-yellow-700 transition duration-300"
                    >
                        Sign In
                    </button>
                </form>
                <p className="text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-yellow-500 hover:underline">
                        Sign up here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;