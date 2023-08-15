import React, { Component } from "react";
import { FaTrash, FaRegMinusSquare, FaPlusSquare } from "react-icons/fa";

export class Order extends Component {
  render() {
    const { item, onDelete, onIncreaseQuantity, onDecreaseQuantity } =
      this.props;

    return (
      <div className="item">
        <img src={"./img/" + item.img} alt={item.title} />
        <div className="price-container">
          <h2>{item.title}</h2>
          <div className="quantity-controls">
            <FaRegMinusSquare
              className="minus-icon"
              onClick={() => onDecreaseQuantity(item.id)}
            />
            <span className="quantity">{item.quantity}</span>
            <FaPlusSquare
              className="plus-icon"
              onClick={() => onIncreaseQuantity(item.id)}
            />
          </div>
          <b>{item.price}$</b>
        </div>
        <FaTrash className="delete-icon" onClick={() => onDelete(item.id)} />
      </div>
    );
  }
}

export default Order;
