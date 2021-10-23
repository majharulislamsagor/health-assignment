import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleService = () => {

    const { ServiceId } = useParams();
    const [Details, setDetails] = useState([]);

    useEffect(() => {
        fetch('/Service.json')
            .then(res => res.json())
            .then(data => setDetails(data[0]))
    }, []);
    return (
        <div>

            <div className='mt-5 pt-5'>
                <img src={Details.img} alt="" />

                <h1>{Details.title}</h1>
                <h3>Price: {Details.price}</h3>
                <p>{Details.description}</p>
            </div>



        </div>
    );
};

export default SingleService;