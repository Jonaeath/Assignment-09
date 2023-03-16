import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DispplayTopices.css'



const DisplayTopics = ({course}) => {
    const{name,logo} =course;
   
const navegate = useNavigate()

    return (
        <div className='box-container'>
            <div className='box-container-img'>
            <img src={logo} alt=''/>
            </div>
        <div className='button-container'>
            <h1>{name}</h1>
            <button onClick={()=>navegate('topics')} className='btn-position'>
                <p>Start Practice</p>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
            
        </div>
        </div>
    );
};

export default DisplayTopics;