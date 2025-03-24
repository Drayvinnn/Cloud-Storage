import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setSuccessMessage("");

        const { error } = await supabase.auth.signUp({ email, password });

        if (error) {
            setErrorMessage(error.message);
        } else {
            setSuccessMessage("Registration successful! A confirmation email has been sent.");
            setTimeout(() => navigate("/login"), 3000);
        }
    };

    return (
        <div 
            className="flex items-center justify-center min-h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560807707-8cc77767d783?w=1600')" }} // Replace with a reliable static dog image URL
        >
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-xl rounded-3xl bg-opacity-90">
                <h2 className="text-3xl font-extrabold text-center text-gray-900">Create Account</h2>

                {successMessage && (
                    <p className="text-center text-sm text-green-500">{successMessage}</p>
                )}
                {errorMessage && (
                    <p className="text-center text-sm text-red-500">{errorMessage}</p>
                )}

                <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
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
                            className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 text-white font-semibold bg-yellow-500 rounded-lg hover:bg-purple-700 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-yellow-500 hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
