import React from 'react';
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-3 m-3 border-b-2'> 
            <h1 className='font-bold text-4xl'>Knowledge Cafe</h1>
            <img src={profile} alt="" />

        </div>
    );
};

export default Header;