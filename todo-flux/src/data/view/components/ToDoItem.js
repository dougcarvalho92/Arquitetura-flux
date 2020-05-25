import React, { Component } from "react";

// import { Container } from './styles';

export default class ToDoItem extends Component {
  static defaultProps = {
    item: {},
  };

  render() {
    const { props } = this,
      item = props.item;

    return (
      <li className="todo-list-item">
        <input className="tw-check" type="checkbox" checked={item.isChecked} />
        <input
          className="tw-text"
          type="text"
          disabled={item.isChecked}
          defaultChecked={item.description}
        />
        <button className='tw-btn'>x</button>
      </li>
    );
  }
}
