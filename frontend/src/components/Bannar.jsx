import React from 'react';
import banner from "../../public/Bannar.jpg";

function Bannar() {
    return (
        <>
            <div className='container mx-auto max-w-screen-2xl md:px-20 px-5 dark:bg-slate-900 flex flex-col md:flex-row my-10'>
                <div className='w-fill md:w-1/2 mt-12 md:mt-32 order-2 md:order-1' >
                    <div className='space-y-12'>
                        <h1 className='text-3xl font-bold ' >
                            Hello welcome here to learn something <span className='text-pink-500'>new everyday!!</span>
                        </h1>
                        <p className='text-xl'>
                            This is my first project in reactjs and tailwindcss. I am learning everyday something new and trying to implement it in my project. I hope you will like it.
                        </p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>


                    </div>
                    <button className="btn btn-secondary mt-4">Secondary</button>

                </div>
                <div className='w-fill md:w-1/2 order-1 md:order-2 mt-10' >
                <img src={banner} className='h-92 w-92
                ' alt="" />
                </div>
            </div>
        </>
    );
}

export default Bannar;
