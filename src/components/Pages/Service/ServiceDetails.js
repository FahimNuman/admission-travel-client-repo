import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import  { AuthContext } from '../../Contexts/UseContext';
import Review from '../Review/Review';

const ServiceDetails = () => {
    
    const {user} = useContext(AuthContext);

    const ref = useRef(null);
    const serviceDetails = useLoaderData();
    const {_id}=serviceDetails;
    console.log(_id);
    const handleAddReview = event =>{
        const review = ref.current.value;
        const email=user?.email || 'undefind';
        const displayName =user?.displayName|| 'undefind';
        const photoURL = user?.photoURL||'undefind';

        const obj = {
            displayName: displayName,
            email: email,
            photoURL: photoURL,
            review:review,
            serviceID: _id,
        };
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    // sT(true)
                    alert('Successful');
                    ref.current.value = '';

                }
            })


    }
    const [reviews,setReviews]= useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?id=${_id}`)
        .then(res=>res.json()
        .then(data=>{
            setReviews(data);
        }))
    }
        ,[_id])
    
    return (
        <div>
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src={serviceDetails.img} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
                        <div className="space-y-2">
                            <Link rel="noopener noreferrer" href="#" className="inline-block text-black text-2xl font-semibold sm:text-3xl">{serviceDetails.title}</Link>
                            
                        </div>
                        <div className="dark:text-gray-100 ">
                            <p>{serviceDetails.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <textarea name="review" ref={ref} ></textarea>
                <button onClick={handleAddReview}>AddReview</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3'> {
                reviews.map(review => <Review key={review._id} review={review}></Review>)
            }</div>
        </div>
    );
};

export default ServiceDetails;