import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <a className="navbar-brand text-success ml-md-5" href="#">
              <img src="image/logo1.png" alt="Kinopoisk"></img>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">{this.props.name1}<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">{this.props.name2}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">{this.props.name3}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">{this.props.name4}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">{this.props.name5}</a>
                </li>
              </ul>
              <a href="#" data-toggle="tooltip" data-placement="bottom" title="Sign up"><i className="far fa-user"></i></a>
            </div>            
          </div> 
        </nav>
      </div>
    );
  }
}

export default Header;
