import React from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {
    const filterData = list.filter((data) => data.category === "free")
    console.log(filterData)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='max-w-screen-2xl md:px-20 px-5 space-y-5'>
                <h1 className='font-bold text-xl'>
                    Free Offered Cources
                </h1>
                <p>
                    Here are some free offered courses for you. You can learn these courses for free.
                </p>



            </div>
            <div className='py-10 max-w-screen-2xl md:px-20 px-5 '>
                <Slider {...settings}>
                   {filterData.map((item)=>(
                    <Cards item={item} key={item.id}/>
                   ))}
                </Slider>
            </div>
        </>


    );
}
export default Freebook;
