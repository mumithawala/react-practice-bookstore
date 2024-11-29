import React from 'react';
import Login from './Login';
import { useForm } from "react-hook-form";


function signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (

        <>
            <div className='flex h-screen item-center justify-center'>
                <div id="" className="">
                    <div className="modal-box w-100">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                <a href="/">✕</a>
                            </button>

                            <h3 className="font-bold text-lg">Signup</h3>
                            <div className='space-y-4 mt-3'>
                                <div >
                                    <span>Full Name</span>
                                    <br />
                                    <input type="text" placeholder="Enter your Full Name" className="input input-bordered mt-1"
                                        {...register("name", { required: true })} />
                                    {errors.name && <span className='text-red-500 text-sm'>  This field is required</span>}

                                </div>
                                <div >
                                    <span>Email</span>
                                    <br />
                                    <input type="email" placeholder="Enter your Email" className="input input-bordered mt-1"
                                        {...register("email", { required: true })} />
                                    {errors.email && <span className='text-red-500 text-sm'>  This field is required</span>}

                                </div>
                                <div>
                                    <span>Password</span>
                                    <br />
                                    <input type="password" placeholder="Enter your Password" className="input input-bordered mt-1"
                                        {...register("password", { required: true })} />
                                    {errors.password && <span className='text-red-500 text-sm'>  This field is required</span>}

                                </div>

                            </div>
                            <div className='flex items-center justify-between mt-4'>
                                <button className="bg-pink-500 text-white hover:bg-slate-900 rounded-md px-3 py-2 ">Signup</button>
                                <p>
                                    Already, have an account? <a className="text-blue-500 cursor-pointer hover:underline"
                                        onClick={() =>
                                            document.getElementById('my_modal_3').showModal()}>
                                        Login</a>
                                    <Login />
                                </p>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>

    );
}

export default signup;
