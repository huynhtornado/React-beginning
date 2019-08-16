import React, { Component } from 'react';

import './Slideshow.scss';

class Slideshow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0
    };
  }

  goTo = () => {
    let index = 0;
    index = this.state.currentIndex + 1;
    this.setState({
      currentIndex: index >= this.props.input.length ? 0 : index
    })
  };

  componentDidMount() {
    var that = this;
    this.timeout = setTimeout(() => {
      that.goTo();
    }, 30000);
  }

  componentDidUpdate() {
    var that = this;
    clearInterval(this.timeout);
    this.timeout = setTimeout(() => {
      that.goTo()
    }, 30000);

  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    return (
      <div className="lp-slideshow">
          {
            this.props.input.map((image, index) => {
              return (
                <div
                  key={index}
                  className={
                    `slide ${this.state.currentIndex === index ? "active" : ""}`
                  }
                >
                  <img className="image" src={image} alt={image}  width="1134" height="744" />
                </div>
              )
            })
          }
      </div>
    );
  }
}

export default Slideshow;