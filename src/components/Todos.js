import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class Todos extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Todos;
