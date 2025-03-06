import React, { Component } from "react";
import Header from "./layout/Header";
import Todos from "./Todos";

export class TodoApp extends Component {
  state = {
    todos: [
      { id: 1, title: "Setup development environment", completed: true },
      { id: 2, title: "Develop website and add content", completed: false },
      { id: 3, title: "Deploy to live server", completed: false },
    ],
  };
  handleCheckboxChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  deteleTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Todos
          todos={this.state.todos}
          handleChange={this.handleCheckboxChange}
          deleteTodo={this.deteleTodo}
        />
      </div>
    );
  }
}

export default TodoApp;
