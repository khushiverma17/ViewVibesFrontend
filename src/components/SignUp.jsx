import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Input from './Input';
import Button from './Button';

function SignUp() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        username: '',
        password: '',
        avatar: null,
        coverImage: null
    })

    

    const signUpHandler = async () => {
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            }
            console.log("hello");


            const response = await axios.post(
                "http://localhost:8000/v1/api/users/register",
                data, config
            )
            console.log(response);
            

            // await loginHandler();
            console.log("user registered successfully");
            navigate("./login")
            



        } catch (error) {
            console.log("Error in signing up", error);

        }
        console.log("hello");

    }



    return (
        <div className="flex items-center justify-center mt-10">
            <div className={`mx-auto w-full max-w-lg bg-[#200f0f] rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        {/* <Logo width="100%" /> */}
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight text-white">
                    Sign in to your account
                </h2>
                <p className="mt-2 text-center text-base text-white">
                    {/* Don&apos;t have an account?&nbsp; */}
                    Already have an account?&nbsp;
                    <Link
                        to="/login"

                        // to = "/"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Login
                    </Link>
                </p>
                {/* {error && <p className="text-red-600 mt-8 text-center">{error}</p>} */}
                <form className="mt-8">
                    {/* <form> */}
                    <div className="space-y-5 text-white">
                        <Input
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
                            label="FullName"
                            placeholder="Enter your full name"
                            type="text"
                        />

                        <Input 
                            label="Avatar"
                            placeholder="Enter avatar image"
                            type="file"
                        />
                        <Input 
                            label="CoverImage"
                            placeholder="Enter cover image"
                            type="file"
                        />
                        
                        <Input
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
    )
}

export default SignUp
