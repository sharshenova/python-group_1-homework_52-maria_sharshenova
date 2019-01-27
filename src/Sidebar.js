import React, { Component } from 'react';
import './Sidebar.css';


class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar mt-5">
        <ul className="list-group">
          <li className="list-group-item">
            <a className="nav-link" href="#">{this.props.name1}<span className="sr-only">(current)</span></a>
          </li>
          <li className="list-group-item">
            <a className="nav-link" href="#">{this.props.name2}</a>
          </li>
          <li className="list-group-item">
            <a className="nav-link" href="#">{this.props.name3}</a>
          </li>
          <li className="list-group-item">
            <a className="nav-link" href="#">{this.props.name4}</a>
          </li>
          <li className="list-group-item">
            <a className="nav-link" href="#">{this.props.name5}</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
