import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
          img: "b1.jpg",
        },
        {
          id: 3,
          title: "book3",
          genre: "Романы",
          price: "22,32",
          img: "b1.jpg",
        },
        {
          id: 4,
          title: "book4",
          genre: "Бизнес литература",
          price: "22,32",
          img: "b1.jpg",
        },
        {
          id: 5,
          title: "book5",
          genre: "Рассказы",
          price: "22,32",
          img: "b1.jpg",
        },
        {
          id: 6,
          title: "book6",
          genre: "Повести",
          price: "22,32",
          img: "b1.jpg",
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
