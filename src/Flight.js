import React, { Component } from 'react';


class Flight extends Component {
  render() {
    return (
      <div className="Flight col-md-4">
        <div className="card" width="18rem">
          <img src={this.props.src} width="180px" className="card-img-top" alt="{this.props.to}"/>
          <div className="card-body">
            <h5 className="card-title">{this.props.from} : {this.props.to}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{this.props.number}</li>
            <li className="list-group-item">{this.props.date}</li>
            <li className="list-group-item">$ {this.props.price}</li>
          </ul>
          <div className="card-body">
            <a href="{this.props.link}" className="card-link">Подробнее</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Flight;