
import React, { useState } from 'react';
import "./NavBar.css";
import Logo from "../Icons/HeaderIcons/Logo.svg";
import Profile from "../Icons/HeaderIcons/profile.svg";
import Heart from "../Icons/HeaderIcons/heart.svg";
import ShoppingBag from "../Icons/HeaderIcons/shopping-bag.svg";
import Search from "../Icons/HeaderIcons/search-normal.svg";

export default function NavBar() {
  const [showOptions, setShowOptions] = useState(false);

  // Toggle options visibility on mobile
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className='parentIcon'>
      <div className='icons'>
        <div className='left-section'>
        <div className="toggle-button" onClick={toggleOptions}>
            ☰
          </div>
          <img src={Logo} alt='Logo' />
          {/* Toggle button visible only on mobile */}
        
        </div>

        <div className='Logo'>
       <b>LOGO</b> 
        </div>

        <div className='right-icons'>
          <img src={Search} alt='Search' />
          <img src={Heart} alt='Heart' />
          <img src={ShoppingBag} alt='Shopping Bag' />
          <img src={Profile} alt='Profile' />
          <select className="language-select">
            <option>ENG</option>
            <option>FR</option>
            <option>ES</option>
          </select>
        </div>
      </div>

      {/* Options will always show on desktop, but on mobile only when toggled */}
      <div className={`options ${showOptions ? 'show' : ''}`}>
        <h4>SHOP</h4>
        <h4>SKILLS</h4>
        <h4>STORIES</h4>
        <h4>ABOUT</h4>
        <h4>CONTACT US</h4>
      </div>

      <div className='description'>
        <p className='font'>DISCOVER OUR PRODUCTS</p>
        <span>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</span>
      </div>
    </div>
  );
}
