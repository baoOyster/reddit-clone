//!Everything is hardcoded here

import React, {useState} from 'react';
import './NavBar.css';
import Popular from '../../assets/images/nav-bar/arrow-up-right-dots-solid.svg';
import Blog from '../../assets/images/nav-bar/blog-solid.svg';
import Home from '../../assets/images/nav-bar/house-solid.svg';
import Help from '../../assets/images/nav-bar/question-solid.svg';
import Ads from '../../assets/images/nav-bar/rectangle-ad-solid.svg';
import AboutReddit from '../../assets/images/nav-bar/reddit-alien-brands.svg';
import BestOfReddit from '../../assets/images/nav-bar/timeline-solid.svg';
import Explore from '../../assets/images/nav-bar/wpexplorer-brands.svg';
import Career from '../../assets/images/nav-bar/briefcase-solid.svg';
import All from '../../assets/images/nav-bar/earth-asia-solid.svg';
import Plus from '../../assets/images/nav-bar/plus-solid.svg';
import Press from '../../assets/images/nav-bar/newspaper-solid.svg';
import RedditPro from '../../assets/images/nav-bar/fort-awesome-brands-solid.svg';
import Topics from '../../assets/images/nav-bar/table-solid.svg';
import Communities from '../../assets/images/nav-bar/people-group-solid.svg';
import HardCodedAvatar from '../../assets/images/header/hard-code-avatar.svg';
import StarRegular from '../../assets/images/nav-bar/star-regular.svg';
import StarSolid from '../../assets/images/nav-bar/star-solid.svg';

const NavBar = () => {
    const [feedsOpen, setFeedsOpen] = useState(true);
    const [recentOpen, setRecentOpen] = useState(true);
    const [communitiesOpen, setCommunitiesOpen] = useState(true);
    const [resourcesOpen, setResourcesOpen] = useState(true);

    return (
        <nav className='nav-bar custom-scroll'>
            <div className='home-bar'>
                <div className='bar-btn'>
                    <img className='icon-nav' src={Home} alt='Home'/>
                    <p>Home</p>
                </div>
                <div className='bar-btn'>
                    <img className='icon-nav' src={Popular} alt='Popular'/>
                    <p>Popular</p>
                </div>
                <div className='bar-btn'>
                    <img className='icon-nav' src={Explore} alt='Explore'/>
                    <p>Explore</p>
                </div>
                <div className='bar-btn'>
                    <img className='icon-nav' src={All} alt='All'/>
                    <p>All</p>
                </div>
            </div>
            <div className='feeds-bar'>
                <div className='bar-btn topic-btn' onClick={() => setFeedsOpen(!feedsOpen)}>
                    <p>CUSTOM FEEDS</p>
                    <div className={`open-close ${feedsOpen ? 'open' : ''}`}></div>
                </div>
                <div className={`dropdown-menu ${feedsOpen ? 'open' : ''}`}>
                    <div className='bar-btn'>
                        <img className='icon-nav' src={Plus} alt='Create a custom feed'/>
                        <p>Create a custom feed</p>
                    </div>
                    <div className='bar-btn star-btn'>
                        <img className='icon-nav' src={Home} alt='Home'/>
                        <p>Home</p>
                    </div>
                </div>
            </div>
            <div className='recent-bar'>
                <div className='bar-btn topic-btn' onClick={() => setRecentOpen(!recentOpen)}>
                    <p>RECENT</p>
                    <div className={`open-close ${recentOpen ? 'open' : ''}`}></div>
                </div>
                <div className={`dropdown-menu ${recentOpen ? 'open' : ''}`}>
                    <div className='bar-btn'>
                        <img className='icon-nav' src={Plus} alt='Create a custom feed'/>
                        <p>Create a custom feed</p>
                    </div>
                </div>
            </div>
            <div className='communities-bar'>
                <div className='bar-btn topic-btn' onClick={() => setCommunitiesOpen(!communitiesOpen)}>
                    <p>COMMUNITIES</p>
                    <div className={`open-close ${communitiesOpen ? 'open' : ''}`}></div>
                </div>
                <div className={`dropdown-menu ${communitiesOpen ? 'open' : ''}`}>
                    <div className='bar-btn'>
                        <img className='icon-nav' src={Plus} alt='Create a custom feed'/>
                        <p>Create a community</p>
                    </div>
                </div>
            </div>
            <div className='resource-bar'>
                <div className='bar-btn topic-btn' onClick={() => setResourcesOpen(!resourcesOpen)}>
                    <p>Resources</p>
                    <div className={`open-close ${resourcesOpen ? 'open' : ''}`}></div>
                </div>
                <div className={`dropdown-menu ${resourcesOpen ? 'open' : ''}`}>
                    <div className='resource-part-1'>
                        <div className='bar-btn'>
                            <img className='icon-nav' src={AboutReddit} alt='About Reddit'/>
                            <p>About Reddit</p>
                        </div>
                        <div className='bar-btn'>
                            <img className='icon-nav' src={Ads} alt='Advertise'/>
                            <p>Advertise</p>
                        </div>
                        <div className='bar-btn'>
                            <img className='icon-nav' src={RedditPro} alt='Reddit Pro'/>
                            <p>Reddit Pro</p>
                            <p className='beta'>BETA</p>
                        </div>
                        <div className='bar-btn'>
                            <img className='icon-nav' src={Help} alt='Help'/>
                            <p>Help</p>
                        </div>
                        <div className='bar-btn'>
                            <img className='icon-nav' src={Blog} alt='Blog'/>
                            <p>Blog</p>
                        </div>
                        <div className='bar-btn'>
                            <img className='icon-nav' src={Career} alt='Careers'/>
                            <p>Careers</p>
                        </div>
                        <div className='bar-btn'>
                            <img className='icon-nav' src={Press} alt='Press'/>
                            <p>Press</p>
                        </div>
                    </div>
                    <div className='resource-part-2'>
                        <div className='bar-btn'>
                            <img className='icon-nav' src={Communities} alt='Communities'/>
                            <p>Communities</p>
                        </div>
                        <div className='bar-btn'>
                            <img className='icon-nav' src={BestOfReddit} alt='Best of Reddit'/>
                            <p>Best of Reddit</p>
                        </div>
                        <div className='bar-btn'>
                            <img className='icon-nav' src={Topics} alt='Topics'/>
                            <p>Topics</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar