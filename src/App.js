import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Items from "./Components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Предмет1",
          img: "airpods.jpg",
          desc: "описание",
          category: "mouse",
          price: "50.00",
        },
        {
          id: 2,
          title: "Предмет2",
          img: "keybord.jpg",
          desc: "описание",
          category: "mouse",
          price: "50.00",
        },
        {
          id: 3,
          title: "Предмет3",
          img: "micro.jpg",
          desc: "описание",
          category: "mouse",
          price: "50.00",
        },
        {
          id: 4,
          title: "Предмет4",
          img: "mouse.jpg",
          desc: "описание",
          category: "mouse",
          price: "50.00",
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }
  handleIncreaseQuantity = (itemId) => {
    const updatedOrders = this.state.orders.map((order) => {
      if (order.id === itemId) {
        return { ...order, quantity: order.quantity + 1 };
      }
      return order;
    });
  
    this.setState({ orders: updatedOrders });
  };
  

  handleDecreaseQuantity = (itemId) => {
    const updatedOrders = this.state.orders.map((order) => {
      if (order.id === itemId && order.quantity > 1) {
        return { ...order, quantity: order.quantity - 1 };
      }
      return order;
    });

    this.setState({ orders: updatedOrders });
  };

  render() {
    return (
      <div className="wrapper">
         <Header
          orders={this.state.orders}
          onDelete={this.deleteOrder}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
        />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }
  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
        el.quantity += 1; // Increment quantity if the item is already in the orders
      }
    });
    if (!isInArray) {
      item.quantity = 1; // Initialize quantity if adding a new item to the orders
      this.setState({ orders: [...this.state.orders, item] });
    } else {
      this.setState({ orders: this.state.orders }); // Trigger a re-render
    }
  }
  
}

export default App;
