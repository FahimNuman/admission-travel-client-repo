import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const storedReview = useLoaderData();

    const [review, setReview] = useState(storedReview);

    const handleUpdateReview = event => {
        event.preventDefault();
        
        fetch(`https://ass-elv-server.vercel.app/reviews/${storedReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('user review')
                    console.log(data);
                }

            })
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review }
        newReview[field] = value;
        setReview(newReview);
    }

    return (
        <div>
            <h2>Please Update: {storedReview.review}</h2>
            <form onSubmit={handleUpdateReview}>
                <input onChange={handleInputChange} defaultValue={storedReview.review} type="text" name='review' placeholder='name' required />
                
                <button type="submit">Update review</button>
            </form>
        </div>
    );
};

export default UpdateReview;