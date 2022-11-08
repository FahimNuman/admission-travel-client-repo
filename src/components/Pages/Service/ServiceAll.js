
import {useLoaderData } from 'react-router-dom';
import ServiceDetailsCard from './ServiceDetailsCard';


const ServiceAll = () => {
    const serviceAll = useLoaderData();
    console.log(serviceAll);
    return (
        <div>
            {
                serviceAll.map(service => <ServiceDetailsCard key={service._id} service={service}></ServiceDetailsCard>)
            }
        </div>
    );
};

export default ServiceAll;