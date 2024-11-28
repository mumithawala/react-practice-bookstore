import React from 'react';

function Cards({ item }) {
    console.log( item )
    
    return (
        <>
            <div>
                <div className="card bg-base-100 w-96 shadow-xl my-4 hover:scale-105 duration-300">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">
                                {item.category}
                            </div>
                        </h2>
                        <p>
                            {item.title}
                        </p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className="badge badge-outline cursor-pointer hover:bg-pink-200 hover:text-white-content transition-colors duration-300 ease-in-out"
                            >Buy Now</div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
}

export default Cards;
