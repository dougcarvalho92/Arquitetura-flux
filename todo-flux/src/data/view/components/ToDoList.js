import React, { Component } from "react";

// import { Container } from './styles';

export default class ToDoList extends Component {
  static defaultProps = {
    items: [],
  };

  render() {
    const { props } = this;

    if (props.items.length === 0) {
      return <div>No Items</div>;
    }

    return (
      <li className="todo-list-item">
        <input className="tw-check" type="checkbox" checked={item.isChecked} />
        <input
          className="tw-text"
          type="text"
          disabled={item.isChecked}
          defaultChecked={item.description}
        />
        <button className="tw-btn">x</button>
      </li>
    );
  }
}
