import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <div className="Footer bg-primary">
        <div className="container">
          <p>{this.props.number}, email: {this.props.email}</p>
        </div>
      </div>
    );
  }
}

export default Footer;