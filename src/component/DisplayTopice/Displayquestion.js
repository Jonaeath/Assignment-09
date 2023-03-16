import React from 'react';

const DisplayTopice = ({allTopice}) => {
    const {options,question} = allTopice;
    return (
        <div>
            <p>Question: {question}</p>
            <p>*{options}</p>

        </div>
    );
};

export default DisplayTopice;