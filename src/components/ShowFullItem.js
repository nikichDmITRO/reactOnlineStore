import React, { Component } from "react";

export default class ShowFullItem extends Component {
  render() {
    return (
      <div className="fullItem">
       <div >
       <img
          src={"./img/" + this.props.item.img}
          onClick={() => this.props.onShowItem(this.props.item)}
        />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.genre}</p>
        <b>{this.props.item.price} BYN</b>
        <bottom
          className="up-bottom"
          onClick={() => this.props.onAdd(this.props.item)}
        >
          +
        </bottom>
        <div>{this.props.item.titry}</div>
       </div>
      </div>
    );
  }
}
