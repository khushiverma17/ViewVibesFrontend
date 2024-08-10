import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Button from "./Button"
import Input from "./Input"


function Login() {
    const [showLogin, setShowLogin] = useState(true)
    const [data, setData] = useState({ name: "", email: "", password: "", verified: "false" });


    const navigate = useNavigate();

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const loginHandler = async (e) => {
        e.preventDefault();
        // console.log("data is ", data);
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            };

            const response = await axios.post(
                "http://localhost:8080/user/login",
                data,
                config
            );

            // localStorage.setItem("userData", JSON.stringify(response));
            // sessionStorage.setItem("userData", JSON.stringify(response));
            navigate("/home")

        }
        catch (error) {
            // setLogInStatus({
            //     msg: "Invalid Username or Password",
            //     key: Math.random(),
            // })
            console.log("eroor: ", error);
            
        }
    }

    const signUpHandler = async (e) => {
        e.preventDefault();

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const response = await axios.post(
                "http://localhost:8080/user/register",
                data,
                config
            );
            await loginHandler()
            // navigate("/app/welcome");

            // sessionStorage.setItem("userData", JSON.stringify(response));
        }
        catch (error) {
            console.log(error);
            // if (error.response) {
            //     // setLogInStatus({
            //     //     msg: "User with this email id already exists",
            //     //     key: Math.random(),
            //     // })
            // }
            // if (error.response.status === 406) {
            //     setLogInStatus({
            //         msg: "User Name already Taken, Please take another one",
            //         key: Math.random(),
            //     });
            // }
        }
    }



    return (
        <>

            {showLogin &&
                <div className="flex items-center justify-center mt-10">
                    <div className={`mx-auto w-full max-w-lg bg-[#200f0f] rounded-xl p-10 border border-black/10`}>
                        <div className="mb-2 flex justify-center">
                            <span className="inline-block w-full max-w-[100px]">
                                {/* <Logo width="100%" /> */}
                            </span>
                        </div>
                        <h2 className="text-center text-2xl font-bold leading-tight text-white">
                            Login to your account
                        </h2>
                        <p className="mt-2 text-center text-base text-white">
                            Don&apos;t have an account?&nbsp;
                            {/* <Link
                                to="/signup"
                                // to = "/"
                                className="font-medium text-primary transition-all duration-200 hover:underline"
                            >
                                Sign Up
                            </Link> */}
                            <span
                            className="font-medium text-primary transition-all duration-200 hover:underline hover:cursor-pointer"
                            onClick={() => setShowLogin(false)}
                            >Signup</span>
                        </p>
                        <form>
                            <div className="space-y-5 text-white">
                                <Input
                                    onChange={changeHandler}
                                    name = "email"
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
                                <Button
                                    type="submit"
                                    onClick={loginHandler}
                                >Login</Button>
                            </div>
                        </form>
                    </div>
                </div>
            }
            {!showLogin && (
                <div className="flex items-center justify-center mt-10">
                    <div className={`mx-auto w-full max-w-lg bg-[#200f0f] rounded-xl p-10 border border-black/10`}>
                        <div className="mb-2 flex justify-center">
                            <span className="inline-block w-full max-w-[100px] ">
                                {/* <Logo width="100%" /> */}
                            </span>
                        </div>
                        <h2 className="text-center text-2xl font-bold leading-tight text-white">
                            Sign in to your account
                        </h2>
                        <p className="mt-2 text-center text-base text-white">
                            {/* Don&apos;t have an account?&nbsp; */}
                            Already have an account?&nbsp;
                            {/* <Link
                                to="/login"

                                // to = "/"
                                className="font-medium text-primary transition-all duration-200 hover:underline"
                            >
                                Login
                            </Link> */}
                            <span
                            className="font-medium text-primary transition-all duration-200 hover:underline hover:cursor-pointer"
                            onClick={() => setShowLogin(true)}
                            >Login</span>
                        </p>
                        {/* {error && <p className="text-red-600 mt-8 text-center">{error}</p>} */}
                        <form className="mt-8">
                            {/* <form> */}
                            <div className="space-y-5 text-white">
                                <Input
                                    name="username"
                                    onChange={changeHandler}
                                    label="Username"
                                    placeholder="Enter your username"

                                //this object inside register is nothing but data being passed in login function
                                // {...register("email", {
                                //     required: true,
                                //     validate: {
                                //         //regexr.com
                                //         matchPattern: (value) => /^\w+([,-]?\w+)*@\w+([,-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                //             "Email must be valid"
                                //     }
                                // })}
                                />
                                <Input
                                    name="email"
                                    onChange={changeHandler}
                                    label="Email"
                                    placeholder="Enter your email"
                                    type="email"
                                //this object inside register is nothing but data being passed in login function
                                // {...register("email", {
                                //     required: true,
                                //     validate: {
                                //         //regexr.com
                                //         matchPattern: (value) => /^\w+([,-]?\w+)*@\w+([,-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                //             "Email must be valid"
                                //     }
                                // })}
                                />
                                <Input
                                    name="fullName"
                                    onChange={changeHandler}
                                    label="FullName"
                                    placeholder="Enter your full name"
                                    type="text"
                                />

                                <Input
                                    name="avatar"
                                    onChange={changeHandler}
                                    label="Avatar"
                                    placeholder="Enter avatar image"
                                    type="file"
                                />
                                <Input
                                    name="coverImage"
                                    onChange={changeHandler}
                                    label="CoverImage"
                                    placeholder="Enter cover image"
                                    type="file"
                                />

                                <Input
                                    name="password"
                                    onChange={changeHandler}
                                    label="Password"
                                    type="password"
                                    placeholder="Enter your password"
                                // {...register("password", {
                                //     required: true
                                // })}
                                />
                                <Button
                                    type="submit"
                                    // SignIn
                                    onClick={signUpHandler}
                                >SignIn</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}



        </>
    )
}
export default Login;