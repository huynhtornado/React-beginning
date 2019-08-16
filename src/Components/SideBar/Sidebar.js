import React from 'react';

import './Sidebar.css';

const Sidebar = props => {
    let sidebarClasses = 'sidebar'
    if (props.show) {
        sidebarClasses = 'sidebar show';
    }
    return (
    <nav className={sidebarClasses}>
        <ul>
            <li><a href="/">Products</a></li>
            <li><a href="/">Users</a></li>
        </ul>
    </nav>
    );
};

export default Sidebar;