import React, { Component } from "react";

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { key: "Все" },
        { key: "Стихи" },
        { key: "Романы" },
        { key: "Бизнес литература" },
        { key: "Рассказы" },
        { key: "Повести" },
      ],
    };
  }

  render() {
    return <div className="categories">
{this.state.categories.map(el=>(<div key={el.key} onClick={()=>this.props.chooseCategory(el.key)} >{el.key}</div>))}

    </div>;
  }
}
