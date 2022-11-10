import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetailsCard = ({ service }) => {
    const { _id, img, price, title, description } = service;
    return (
        <div>
            <Link rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>
                {/* <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={img} alt='' /> */}
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{price}</h3>
                    <span className="text-xs dark:text-gray-400">{title}</span>
                    
                        <p>{description>100?description.slice(0, 250):description + '.....'}<Link to={`/ServiceDetails/${_id}`}>Readmore</Link></p>

                       

                    
                </div>
            </Link>
        </div>
    );
};

export default ServiceDetailsCard;