import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://ass-elv-server.vercel.app/')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            service.map(service => <ServiceCard key={service._id}
                                service={service}></ServiceCard>)
                        }
                    </div>
                    <div className="flex justify-center">
                        <button className="btn btn-ghost"><Link to="/ServiceAll">More Post</Link></button>  
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;