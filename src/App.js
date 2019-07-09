import React, { Component } from "react";
// import ReactDOM from "react-dom";
import Navbar  from './Components/Navbar';
import Contents from './Components/Contents';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
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
