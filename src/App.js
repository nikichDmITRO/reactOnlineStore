import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import React from "react";

class App extends React.Component {
constructor(props){
  super(props)
  this.state={
    items:[
      {id:1,
      title:'book1'},
      {id:2,
      title:'book2'}
    ]
  }
}

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items}/>
        <Footer />
        
      </div>
    );
  }
}

export default App;
