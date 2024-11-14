// Header.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../store/slices/cartSlice';
import { FaHeart, FaBars, FaHome, FaClipboardList } from 'react-icons/fa';

const Header = ({ onWishlistToggle }) => {
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleOpenCart = (open) => {
        dispatch(toggleCart(open));
    };

    const cartQuantity = cartItems.length;

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the side menu
    };

    return (
        <header id="header">
            <div className="container">
                <div className="navbar">
                    <div className="menu-icon" onClick={toggleMenu}>
                        <FaBars />
                    </div>
                    <h4>Redux Shopping Cart</h4>
                    <div className="nav_menu">
                        <div title="Wishlist" className="wishlist_icon" onClick={onWishlistToggle}>
                            <FaHeart className="header-icon" />
                        </div>
                        <div title="Cart" className="cart_icon" onClick={() => handleOpenCart(true)}>
                            <img src="/images/bag-icon.svg" alt="bag-icon" />
                            <span className="badge">{cartQuantity}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Side Menu */}
            {menuOpen && (
                <div className="side-menu">
                    <ul>
                        <li onClick={toggleMenu}><FaHome /> Home</li>
                        <li onClick={toggleMenu}><FaHeart /> Wishlist</li>
                        <li onClick={toggleMenu}><FaClipboardList /> Report</li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
