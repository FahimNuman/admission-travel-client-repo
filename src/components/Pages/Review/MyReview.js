import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/UseContext';
import ReviewForm from './ReviewForm';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setreviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setreviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(rv => rv._id !== id);
                        setreviews(remaining);
                    }
                })
        }
    }
    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(rv => rv._id !== id);
                    const approving = reviews.find(rv => rv._id !== id);
                    approving.status = 'Approved'

                    const newReviews = [approving, ...remaining];
                    setreviews(newReviews);
                }
            })
    }
    return (
        <div>
            <h2 className="text-5xl">You have {reviews.length} Reviews</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ReviewForm
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></ReviewForm>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;