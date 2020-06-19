import React, { Component } from "react";
import "./App.css";
import { CardList } from "./component/card-list/card-list.component";
import { SearchBox } from "./component/searchBox/search-box.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: "",
    };
    // this.searchHandler = this.searchHandler.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users });
      });
  }
  searchHandler = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const fileteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monster"
          searchHandler={this.searchHandler}
        />
        <CardList monsters={fileteredMonsters} />
      </div>
    );
  }
}

export default App;
