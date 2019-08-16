import React, { Component } from 'react';

import Toolbar from './Components/Toolbar/Toolbar';
import Sidebar from './Components/SideBar/Sidebar';
import Backdrop from './Components/Backdrop/Backdrop';
import Level from './Components/Levels/Level';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

  state = {
    isToggleButtonSideBar: false
  }

  toggleButtonSideBar = () => {
    this.setState((prevState) => {
      return { isToggleButtonSideBar: !prevState.isToggleButtonSideBar };
    });
  }

  backdropClickHandler = () => {
    this.setState({
      isToggleButtonSideBar: false
    });
  }

  render() {
    let isbackdrop;
    if (this.state.isToggleButtonSideBar) {
      isbackdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{ height: '100%' }}>
        <Router>
          <Toolbar toggleButtonSidebar={this.toggleButtonSideBar} />
          <Sidebar show={this.state.isToggleButtonSideBar} />
          {isbackdrop}
          <main style={{ marginTop: '86px' }}>
            <Route exact path="/" component={Home} />
            <Route path="/easy" component={Easy} />
            <Route path="/medium" component={Medium} />
            <Route path="/difficult" component={Difficult} />
          </main>
        </Router>
      </div>
    );
  }
}

function Easy() {
  return (
      <div className="container wrapp-box" style={{ paddingRight: '0px', paddingLeft: '0px'}}>
        <Level level={`easy`} />
      </div>
  );
}

function Medium() {
  return (
      <div className="container wrapp-box" style={{ paddingRight: '0px', paddingLeft: '0px'}}>
        <Level level={`medium`} />
      </div>
  );
}

function Difficult() {
  return (
      <div className="container wrapp-box" style={{ paddingRight: '0px', paddingLeft: '0px'}}>
        <Level level={`difficult`} />
      </div>
  );
}

function Home() {
  return (
      <div className="container wrapp-box">
          <p>This is the page content!</p>
      </div>
  );
}

export default App;
