import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/image/logo (1).png';
import { AuthContext } from '../../Contexts/UseContext';

const Header = () => 

    {
        const { user, logOut } = useContext(AuthContext);
        console.log('context', user);

        const handleSignOut = () => {
            logOut()
                .then(() => { })
                .catch(error => console.error(error));
        }

    return (
        <div>
            <div className="navbar bg-warning text-warning-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-orange lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-orange-600 rounded-box w-52">
                            <li><Link>Home</Link></li>
                            <li tabIndex={0}>
                                <Link className="justify-between">
                                    Service
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-orange-600">
                                    <li><Link>All Service</Link></li>
                                    <li><Link>Review Service</Link></li>
                                </ul>
                            </li>
                            <li><Link Link to="/AddService">Add Service</Link></li>
                            <li><Link>Blog</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end bg-warning">
                        <Link to="/" className="btn btn-ghost normal-case text-xl">
                            <img src={image} alt="" />
                        </Link>
                    </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link>Home</Link></li>
                        <li tabIndex={0}>
                            <Link>
                                Service
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2 bg-warning">
                                <li><Link>Review Service</Link></li>
                                <li><Link>All Service</Link></li>
                            </ul>
                        </li>
                        <li><Link>Blog</Link></li>
                        
                    </ul>
                </div>
                
                <div>{user?.email && <span>{user.email}</span>}
                    {
                        user?.email ?
                            <> <button ><Link to="/AddService">Add Service</Link></button><button ><Link to="/myReview">My Review</Link></button>
                                <button onClick={handleSignOut} className="btn btn-sm">Log out</button></>
                       
                            : <Link to='/login'>
                                <button className='btn btn-sm'>Log In</button>
                            </Link> 
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;