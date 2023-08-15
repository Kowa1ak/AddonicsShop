import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Items from "./Components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
