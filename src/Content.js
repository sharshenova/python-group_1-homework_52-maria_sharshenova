import React, { Component } from 'react';


class Content extends Component {
  render() {
    return (
      <div className="container text-center">
          <div className="mt-4">
            <h1 className="caption">{this.props.title}</h1>
            <p className="maintext h1text">{this.props.text}</p>
          </div>
      
          <div className="mb-5">
            <div className="container text-center">
              <div id="root_flight">
              </div> 
            </div> 
          </div>
        </div>  
    );
  }
}

export default Content;
