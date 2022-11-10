
import {useLoaderData } from 'react-router-dom';
import ServiceDetailsCard from './ServiceDetailsCard';



const ServiceAll = () => {
    const serviceAll = useLoaderData();
    console.log(serviceAll);
    return (
        <div className='grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {
                serviceAll.map(service => <ServiceDetailsCard key={service._id} service={service}></ServiceDetailsCard>)
            }
        </div>
    );
};

export default ServiceAll;