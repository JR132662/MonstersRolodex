import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    fetch('https://api.attackontitanapi.com/characters')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Inspect the API response
        this.setState(() => {
          return { characters: data.results }; // Extract the 'results' array
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.characters.map((character) => {
        return (
          <div key={character.id}>
            <h1>{character.name}</h1>
          </div>
        );
      })}
      </div>
    );
  }
}

export default App;
