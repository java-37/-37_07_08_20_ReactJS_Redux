import React from "react";

import "./App.css";

class App extends React.Component {
  submitHandler = e => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
  }
  render() {
    return <div className="App">
      <form onSubmit={this.submitHandler}>
        <input type="text" name="name"/>
        <input type="text" name="email"/>
        <input type="text" name="phone"/>
        <input type="submit" value="send"/>
      </form>
    </div>;
  }
}

export default App;
