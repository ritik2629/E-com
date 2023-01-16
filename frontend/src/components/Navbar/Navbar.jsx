import React from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className='nav-bar'>
            <Link to="/">
                <h2>Ritik Ecom</h2>
            </Link>
            <Link to="/cart"><div className="nav-bag">
                <MdShoppingCart />
                <span className="bag-qty">
                    <span>3</span>
                </span>
            </div></Link>
        </nav>
    )
}
