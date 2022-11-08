import React from 'react';

const AddService = () => {
    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const service = {
            title: e.target.title.value,
            price: parseInt(e.target.price.value),
            img: e.target.img.value,
            description: e.target.description.value,
        };

        fetch("http://localhost:5000/service", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(service)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Service Added successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    };
    
    return (
        <div>
            <form onSubmit={handleAddService}>
                
                <div className='grid grid-cols-1 lg:grid-cols-1 gap-4'>
                    <input name="title" type="text" placeholder="Service Name" className="input input-ghost w-full  input-bordered" />
                    <input name="price" type="text" placeholder="price" className="input input-ghost w-full  input-bordered" />
                    <input name="img" type="text" placeholder="url" className="input input-ghost w-full  input-bordered" required />

                </div>
                <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="Your Description" required></textarea>

                <input className='btn' type="submit" value="Add Your Service" />
            </form>
        </div>
    );
};

export default AddService;