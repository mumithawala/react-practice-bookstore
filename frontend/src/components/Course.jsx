import React, { useEffect, useState } from 'react';

import Cards from './Cards';
import axios from 'axios';

function Course() {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const response = await axios.get("http://localhost:4001/book");
                console.log(response.data);
                setBook(response.data);
            }
            catch (error) {
                console.log('Error:', error);
            }
        }
        getBook();
    }
        , []);
   
    // console.log(list)
    return (
        <>
            <div className='mx-auto max-w-screen-2xl md:px-20 px-5 '>
                <div className='w-fill  mt-20 md:mt-32 text-center' >
                    <div className='space-y-12'>
                        <h1 className='text-3xl font-bold ' >
                            We are Delight to have you <span className='text-pink-500'>Here!!</span>
                        </h1>
                        <p className='text-xl'>
                            This is my first project in reactjs and tailwindcss. I am learning everyday something new and trying to implement it in my project. I hope you will like it.
                        </p>

                        <button className="btn btn-secondary mt-4">
                            <a href="/">Back</a>
                            </button>

                     


                    </div>
                    <div className='my-12 grid grid-cols-1 md:grid-cols-3 '>
                        {book.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))}
                    </div>
                   

                </div>

            </div>
        </>
    );
}

export default Course;
