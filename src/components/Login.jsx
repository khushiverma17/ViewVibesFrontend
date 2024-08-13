

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

function Login() {
    const [showLogin, setShowLogin] = useState(true);
    const [data, setData] = useState({ name: "", email: "", password: "", verified: "false" });
    const [avatar, setAvatar] = useState(null); // State for avatar file
    const [coverImage, setCoverImage] = useState(null); // State for cover image file

    const navigate = useNavigate();

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    // Handle file input changes
    const fileChangeHandler = (e) => {
        if (e.target.name === "avatar") setAvatar(e.target.files[0]);
        if (e.target.name === "coverImage") setCoverImage(e.target.files[0]);
    };

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const response = await axios.post(
                "http://localhost:8000/api/v1/users/login",
                data,
                config
            );

            sessionStorage.setItem("userData", JSON.stringify(response.data));
            navigate("/home");
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const signUpHandler = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("username", data.username);
            formData.append("email", data.email);
            formData.append("fullName", data.fullName);
            formData.append("password", data.password);
            if (avatar) formData.append("avatar", avatar); // Append avatar file if available
            if (coverImage) formData.append("coverImage", coverImage); // Append cover image file if available

            const config = {
                headers: {
                    "Content-Type": "multipart/form-data", // Important for sending files
                },
            };

            const response = await axios.post(
                "http://localhost:8000/api/v1/users/register",
                formData,
                config
            );
            sessionStorage.setItem("userData", JSON.stringify(response.data));
            navigate("/home");
        } catch (error) {
            console.error("Error during registration: ", error);
        }
    };

    return (
        <>
            {showLogin && (
                <div className="flex items-center justify-center mt-10">
                    <div className={`mx-auto w-full max-w-lg bg-[#200f0f] rounded-xl p-10 border border-black/10`}>
                        <h2 className="text-center text-2xl font-bold leading-tight text-white">
                            Login to your account
                        </h2>
                        <p className="mt-2 text-center text-base text-white">
                            Don&apos;t have an account?&nbsp;
                            <span
                                className="font-medium text-primary transition-all duration-200 hover:underline hover:cursor-pointer"
                                onClick={() => setShowLogin(false)}
                            >
                                Signup
                            </span>
                        </p>
                        <form onSubmit={loginHandler}>
                            <div className="space-y-5 text-white">
                                <Input
                                    onChange={changeHandler}
                                    name="email"
                                    label="Email"
                                    placeholder="Enter your email"
                                    type="email"
                                />
                                <Input
                                    onChange={changeHandler}
                                    label="Username"
                                    name="username"
                                    placeholder="Enter your username"
                                    type="text"
                                />
                                <Input
                                    onChange={changeHandler}
                                    label="Password"
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                />
                                <Button type="submit">Login</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {!showLogin && (
                <div className="flex items-center justify-center mt-10">
                    <div className={`mx-auto w-full max-w-lg bg-[#200f0f] rounded-xl p-10 border border-black/10`}>
                        <h2 className="text-center text-2xl font-bold leading-tight text-white">
                            Sign up for an account
                        </h2>
                        <p className="mt-2 text-center text-base text-white">
                            Already have an account?&nbsp;
                            <span
                                className="font-medium text-primary transition-all duration-200 hover:underline hover:cursor-pointer"
                                onClick={() => setShowLogin(true)}
                            >
                                Login
                            </span>
                        </p>
                        <form onSubmit={signUpHandler} className="mt-8">
                            <div className="space-y-5 text-white">
                                <Input
                                    name="username"
                                    onChange={changeHandler}
                                    label="Username"
                                    placeholder="Enter your username"
                                    type="text"
                                />
                                <Input
                                    name="email"
                                    onChange={changeHandler}
                                    label="Email"
                                    placeholder="Enter your email"
                                    type="email"
                                />
                                <Input
                                    name="fullName"
                                    onChange={changeHandler}
                                    label="Full Name"
                                    placeholder="Enter your full name"
                                    type="text"
                                />
                                <Input
                                    name="avatar"
                                    onChange={fileChangeHandler} // Handle file input change
                                    label="Avatar"
                                    type="file"
                                />
                                <Input
                                    name="coverImage"
                                    onChange={fileChangeHandler} // Handle file input change
                                    label="Cover Image"
                                    type="file"
                                />
                                <Input
                                    name="password"
                                    onChange={changeHandler}
                                    label="Password"
                                    type="password"
                                    placeholder="Enter your password"
                                />
                                <Button type="submit">Sign Up</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Login;
