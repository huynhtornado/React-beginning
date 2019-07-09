import React, { Component } from "react";
// import ReactDOM from "react-dom";
import Navbar  from './Components/Navbar';
import Contents from './Components/Contents';
import "./index.css";

class App extends Component {
    render() {
    return (
        <React.Fragment>
            <Navbar />
            <Contents />
        </React.Fragment>
    );
    }
}

export default App;
