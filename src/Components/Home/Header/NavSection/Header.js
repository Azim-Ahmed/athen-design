import React from 'react';
import Banner from '../Banner/Banner';
import NavSection from './NavSection';

const Header = () => {
    return (
        <div className="backgroundHeader">
            <NavSection></NavSection>
            <Banner></Banner>
        </div>
    );
};

export default Header;