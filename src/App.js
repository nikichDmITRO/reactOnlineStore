import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "book1",
          genre: "novel",
          price: "22,32",
          img: "b1.jpg",
        },
        {
          id: 2,
          title: "book2",
          genre: "Романы",
          price: "32,32",
          img: "b2.jpg",
        },
        {
          id: 3,
          title: "book3",
          genre: "Романы",
          price: "22,32",
          img: "b3.jpg",
        },
        {
          id: 4,
          title: "book4",
          genre: "Бизнес литература",
          price: "22,32",
          img: "b4.jpg",
        },
        {
          id: 5,
          title: "book5",
          genre: "Рассказы",
          price: "22,32",
          img: "b5.jpg",
        },
        {
          id: 6,
          title: "book6",
          genre: "Повести",
          price: "22,32",
          img: "b6.jpg",
        },
        {
          id: 7,
          title: "book7",
          genre: "Повести",
          price: "22,32",
          img: "b8.jpg",
        },
        {
          id: 8,
          title: "book6",
          genre: "Повести",
          price: "22,32",
          img: "b9.jpg",
        },
        {
          id: 9,
          title: "book6",
          genre: "Повести",
          price: "22,32",
          img: "b10.jpg",
        },
        {
          id: 10,
          title: "book6",
          genre: "Повести",
          price: "22,32",
          img: "b11.jpg",
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
