import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayTopice from '../DisplayTopice/Displayquestion';

const Topics = () => {
    const allTopices = useLoaderData(); 
    // console.log(allTopices);

    return (
        <div>
            {
               allTopices.data.questions.map(allTopice=><DisplayTopice
               key = {allTopice.key}
                allTopice ={allTopice} 
               ></DisplayTopice>) 
            }
        </div>
    );
};

export default Topics;