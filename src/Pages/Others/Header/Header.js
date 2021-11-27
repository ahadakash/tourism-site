import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

// header js file

const Header = () => {
    const { user, logOut } = useAuth();
    return (

        <div className='d-flex header-nav justify-content-around menu-bar backcolor'>
            <div className="">
                <h2 className='logo  '>World Tour Planner</h2>
            </div>
            <div className='all-nav header-nav'>
                <Link className='link    ' to='/home'>Home</Link>
                <Link className='link    ' to='/myorders'>My Orders</Link>
                <Link className=' link    ' to='/services'>Services</Link>
                <Link className=' link ' to='/aboutus'>About Us</Link>
                <Link className=' link    ' to='/contact'>Contact Us</Link>
                {user?.email ?
                    <button onClick={logOut} className="btn-style  ">Logout</button> :
                    <Link className=' link' to='/login'>Login</Link>}

                <a href="#login">{user?.displayName}</a>
            </div>
        </div>

    );
};

export default Header;