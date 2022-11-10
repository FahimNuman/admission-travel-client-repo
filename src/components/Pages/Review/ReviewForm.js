import React, { useEffect, useState } from 'react';

const ReviewForm = ({ review, handleDelete, handleStatusUpdate }) => {
    const { _id, displayName, email, status, service } = review;
    const [reviewService, setReviewService] = useState({})

    useEffect(() => {
        fetch(`https://ass-elv-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [service])

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                reviewService?.img &&
                                <img src={reviewService.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{displayName}</div>
                
                    </div>
                </div>
            </td>
            <td>
                {email}
                <br />
                <span className="badge badge-ghost badge-sm">Very Good Service</span>
            </td>
           
            <th>
                <button
                    onClick={() => handleStatusUpdate(_id)}
                    className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>

            </th>
            {/* The button to open modal */}
            <label htmlFor="my-modal-4" className="btn">Edit</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <label htmlFor="message">My Textarea</label>
                    <textarea className="textarea textarea-primary block"  id="message" name="message" />
                    <button className="btn btn-active btn-primary mt-3" >Click</button>
                </label>
            </label>
        </tr>
    );
};

export default ReviewForm;