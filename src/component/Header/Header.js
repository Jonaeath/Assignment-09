import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const navBars = document.querySelector('.fa-Bars');
const headerItem = document.querySelector('.header-item');

navBars?.addEventListener('click', ()=>{
    headerItem?.classList?.toggle('active');
})


const Header = () => {

    return (
        <nav className='header'>
            <div>
            <h1>ICT Hospital</h1>
            </div>
            <FontAwesomeIcon className='fa-Bars' icon={faBars} />
            <div className='header-item'>
                <Link to='/'>Home</Link>
                <Link to='topics'>Topics</Link>
                <Link to='statistics'>Statistics</Link>
                <Link to='blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;