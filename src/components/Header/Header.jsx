import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='flex justify-between items-center px-12  text-center bg-slate-600 h-16 '>
            <h1 className='text-5xl font-bold font-serif'><span className='text-sky-500'>T</span>-Shirt</h1>
            <div>
                <Link className='text-xl ml-6 text-cyan-500 font-semibold hover:text-cyan-500 duration-500 ease-out' to='/'>Home</Link>
                <Link className='text-xl ml-6 hover:text-cyan-500 duration-500 ease-out' to='/orderReview'>OrderReview</Link>
                <Link className='text-xl ml-6 hover:text-cyan-500 duration-500 ease-out' to='/about'>About</Link>
                <Link className='text-xl ml-6 hover:text-cyan-500 duration-500 ease-out' to='/contact'>Contact</Link>
            </div>
        </nav>
    );
};

export default Header;