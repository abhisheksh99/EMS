import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); 

    const submitHandler = async (e) => {
        e.preventDefault();
        setError(""); 
        try {
            const response = await axios.post("http://localhost:3000/api/auth/login", { email, password });
            console.log(response);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message); 
            } else {
                setError("An unexpected error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-300 to-teal-600">
            <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-500 hover:shadow-2xl">
                <h1 className="text-4xl font-extrabold text-center mb-6 text-teal-700">Employee Management System</h1>
                <form className="space-y-8" onSubmit={submitHandler}>
                    <h2 className="text-xl font-semibold text-center text-gray-600 mb-4 border-b-2 border-teal-200 pb-2">Login</h2>

                    {error && ( 
                        <div className="text-red-600 text-center mb-4">
                            {error}
                        </div>
                    )}

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaEnvelope className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                id="email"
                                className="focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 pr-4 py-2 sm:text-sm border-gray-300 rounded-lg"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaLock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="password"
                                id="password"
                                className="focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 pr-4 py-2 sm:text-sm border-gray-300 rounded-lg"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
