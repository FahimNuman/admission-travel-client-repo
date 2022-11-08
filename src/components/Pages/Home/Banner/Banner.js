import React from 'react';
import img1 from '../../../assets/slider/2019-07-22-0174aee4-1bf7-4a88-bb16-90c2d7a57cb2-3.jpg'
import img2 from '../../../assets/slider/2019-07-22-06ad786c-5ae3-46d2-aba8-10a58e96e9d7-1.jpg'

import BannerItem from './BannerItem';

const bannerData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    
]

const Banner = () => {
    return (
        <div className="carousel w-full py-10">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
            
        </div>
    );
};

export default Banner;