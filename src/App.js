import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import React from "react";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "book1",
          genre: "Стихи",
          price: "22.32",
          img: "b1.jpg",
        },
        {
          id: 2,
          title: "book2",
          genre: "Романы",
          price: "32.32",
          img: "b2.jpg",
        },
        {
          id: 3,
          title: "book3",
          genre: "Романы",
          price: "2.32",
          img: "b3.jpg",
        },
        {
          id: 4,
          title: "book4",
          genre: "Бизнес литература",
          price: "76.32",
          img: "b4.jpg",
        },
        {
          id: 5,
          title: "book5",
          genre: "Рассказы",
          price: "21.32",
          img: "b5.jpg",
        },
        {
          id: 6,
          title: "book6",
          genre: "Повести",
          price: "42.32",
          img: "b6.jpg",
        },
        {
          id: 7,
          title: "book7",
          genre: "Повести",
          price: "22.32",
          img: "b7.jpg",
        },
        {
          id: 8,
          title: "book6",
          genre: "Стихи",
          price: "22.32",
          img: "b8.jpg",
        },
        {
          id: 9,
          title: "book6",
          genre: "Повести",
          price: "22.32",
          img: "b9.jpg",
        },
        {
          id: 10,
          title: "book6",
          genre: "Бизнес литература",
          price: "22.32",
          img: "b10.jpg",
        },
        {
          id: 11,
          title: "book1",
          genre: "Стихи",
          price: "22.32",
          img: "b11.jpg",
        },
        {
          id: 12,
          title: "book2",
          genre: "Романы",
          price: "32.32",
          img: "b12.jpg",
        },
        {
          id: 13,
          title: "book3",
          genre: "Романы",
          price: "2.32",
          img: "b13.jpg",
        },
        {
          id: 14,
          title: "book4",
          genre: "Бизнес литература",
          price: "76.32",
          img: "b14.jpeg",
        },
        {
          id: 15,
          title: "book5",
          genre: "Рассказы",
          price: "21.32",
          img: "b15.jpg",
        },
        {
          id: 16,
          title: "book6",
          genre: "Повести",
          price: "42.32",
          img: "b16.jpg",
        },
        {
          id: 17,
          title: "book7",
          genre: "Повести",
          price: "22.32",
          img: "b17.jpg",
        },
        {
          id: 18,
          title: "book6",
          genre: "Стихи",
          price: "22.32",
          img: "b18.jpg",
        },
        {
          id: 19,
          title: "book6",
          genre: "Повести",
          price: "22.32",
          img: "b19.jpg",
        },
        {
          id: 20,
          title: "book6",
          genre: "Бизнес литература",
          price: "22.32",
          img: "b20.jpg",
        },
        /*{
          id: 21,
          title: "book1",
          genre: "Стихи",
          price: "22.32",
          img: "b1.jpg",
        },
        {
          id: 22,
          title: "book2",
          genre: "Романы",
          price: "32.32",
          img: "b2.jpg",
        },
        {
          id: 23,
          title: "book3",
          genre: "Романы",
          price: "2.32",
          img: "b3.jpg",
        },
        {
          id: 24,
          title: "book4",
          genre: "Бизнес литература",
          price: "76.32",
          img: "b4.jpg",
        },
        {
          id: 25,
          title: "book5",
          genre: "Рассказы",
          price: "21.32",
          img: "b5.jpg",
        },
        {
          id: 26,
          title: "book6",
          genre: "Повести",
          price: "42.32",
          img: "b6.jpg",
        },
        {
          id: 27,
          title: "book7",
          genre: "Повести",
          price: "22.32",
          img: "b8.jpg",
        },
        {
          id: 28,
          title: "book6",
          genre: "Стихи",
          price: "22.32",
          img: "b9.jpg",
        },
        {
          id: 29,
          title: "book6",
          genre: "Повести",
          price: "22.32",
          img: "b10.jpg",
        },
        {
          id: 30,
          title: "book6",
          genre: "Бизнес литература",
          price: "22.32",
          img: "b11.jpg",
        },
        {
          id: 31,
          title: "book1",
          genre: "Стихи",
          price: "22.32",
          img: "b1.jpg",
        },
        {
          id: 32,
          title: "book2",
          genre: "Романы",
          price: "32.32",
          img: "b2.jpg",
        },
        {
          id: 33,
          title: "book3",
          genre: "Романы",
          price: "2.32",
          img: "b3.jpg",
        },
        {
          id: 34,
          title: "book4",
          genre: "Бизнес литература",
          price: "76.32",
          img: "b4.jpg",
        },
        {
          id: 35,
          title: "book5",
          genre: "Рассказы",
          price: "21.32",
          img: "b5.jpg",
        },
        {
          id: 36,
          title: "book6",
          genre: "Повести",
          price: "42.32",
          img: "b6.jpg",
        },
        {
          id: 37,
          title: "book7",
          genre: "Повести",
          price: "22.32",
          img: "b8.jpg",
        },
        {
          id: 38,
          title: "book6",
          genre: "Стихи",
          price: "22.32",
          img: "b9.jpg",
        },
        {
          id: 39,
          title: "book6",
          genre: "Повести",
          price: "22.32",
          img: "b10.jpg",
        },
        {
          id: 40,
          title: "book6",
          genre: "Бизнес литература",
          price: "22.32",
          img: "b11.jpg",
        },*/
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            item={this.state.fullItem}
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "Все") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.genre === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
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
