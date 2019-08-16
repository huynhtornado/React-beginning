import React from 'react';

import './ToggleButtonSideBar.css';

const toggleButtonSidebar = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
    </button>
);

export default toggleButtonSidebar;