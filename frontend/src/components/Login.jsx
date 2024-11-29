import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </Link>

                            <h3 className="font-bold text-lg">Login</h3>
                            <div className='space-y-4 mt-3'>
                                <div >
                                    <span>Email</span>
                                    <br />
                                    <input type="email" placeholder="Enter your Email" className="input input-bordered mt-1"
                                        {...register("email", { required: true })} />
                                    {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}

                                </div>
                                <div>
                                    <span>Password</span>
                                    <br />
                                    <input type="password" placeholder="Enter your Password" className="input input-bordered mt-1"
                                        {...register("password", { required: true })} />
                                    {errors.password && <span className='text-red-500 text-sm'>  This field is required</span>}
                                </div>

                            </div>
                            <div className='flex items-center justify-around'>
                                <button className="bg-pink-500 text-white hover:bg-slate-900 rounded-md px-3 py-2 mt-4">Login</button>
                                <p>
                                    Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
                                </p>

                            </div>
                        </form>

                    </div>
                </dialog>
            </div>
        </>
    );
}

export default Login;
