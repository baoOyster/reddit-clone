//! I have just doing some CSS here
//! I hard coded the avatar
//! Assume that we are using the light theme
import React from 'react';
import './Header.css';
import BarsSolid from '../../assets/images/header/bars-solid.svg';
import Notification from '../../assets/images/header/bell-solid.svg';
import Search from '../../assets/images/header/magnifying-glass-solid.svg';
import Plus from '../../assets/images/header/plus-solid.svg';
import Ads from '../../assets/images/header/rectangle-ad-solid.svg';
import Chat from '../../assets/images/header/rocketchat-brands.svg'
import RedditLight from '../../assets/images/logo/reddit-light.svg';
import RedditDark from '../../assets/images/logo/reddit-dark.svg';
import HardCodedAvatar from '../../assets/images/header/hard-code-avatar.svg';

export default function Header(){

    return (
        <header>
            <img className='leftHeader' src={RedditLight} alt='logo'/>
            <div className='searchBar'>
                <img src={Search} alt='search button'/>
                <input type='text' placeholder='Search Reddit'/>
            </div>
            <div className='rightHeader'>
                <div className='header-btn'>
                    <img src={Ads} alt='Ads renting'/>
                </div>
                <div className='header-btn'>
                    <img src={Chat} alt='Chat'/>
                </div>
                <div className='header-btn create-post'>
                    <img src={Plus} alt='Create Post'/>
                    <p>Create</p>
                </div>
                <div className='header-btn'>
                    <img src={Notification} alt='Notification'/>
                </div>
                <div className='account-avatar'>
                    <img src={HardCodedAvatar} alt='account-avatar'/>
                </div>
            </div>
        </header>
    )
}