import React from 'react';
import { Outlet } from 'react-router';
import { Navigation } from '../components/Navigation';

const Layout = () => {
    return (
        <div>
            <nav className='navigation'>
                <Navigation />
            </nav>
            <main>
                <Outlet />
            </main>
         
        </div>
    );
};

export default Layout;