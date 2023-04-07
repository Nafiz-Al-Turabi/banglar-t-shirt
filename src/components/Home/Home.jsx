import React from 'react';
import { useLoaderData } from 'react-router-dom'

const Home = () => {
    const t=useLoaderData()
    console.log(t)
    return (
        <div>
            <h1>This is Home:{t.length}</h1>
        </div>
    );
};

export default Home;