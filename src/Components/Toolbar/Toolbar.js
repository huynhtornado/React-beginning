import React from 'react';

import './Toolbar.css';
import ToggleButtonSideBar from '../SideBar/ToggleButtonSideBar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <ToggleButtonSideBar click={props.toggleButtonSidebar} />
            </div>
            <div className="toolbar__logo">
                <Link to="/">KeyBoard</Link>
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li className="level">Level
                        <ul className="level_navigation">
                            <li><Link to="/easy">Easy</Link></li>
                            <li><Link to="/medium">Medium</Link></li>
                            <li><Link to="/difficult">Difficult</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/user">Users</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;