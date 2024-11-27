import React from 'react';

function Bannar() {
    return (
        <>
            <div className='container mx-auto max-w-screen-2xl md:px-20 px-5 flex flex-col md:flex-row'>
                <div className='w-fill md:w-1/2' >left</div>
                <div className='w-fill md:w-1/2' >right</div>
            </div>
        </>
    );
}

export default Bannar;
