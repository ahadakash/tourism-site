import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch("https://chilling-witch-90234.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setServices(data))
            .finally(() => setIsLoading(false));
    }, [])

    return (

        <div className="row row-cols-1 row-cols-lg-3 bg-dark py-5 row-cols-md-2 g-4">

            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;