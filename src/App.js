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
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
