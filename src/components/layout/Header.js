import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
        {" "}
        <h1 className="header-title">Simple Todo App</h1>{" "}
      </header>
    );
  }
}

export default Header;
