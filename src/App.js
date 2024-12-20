import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Jona',
        },
        {
          name: 'Grey',
        },
        {
          name: 'Eren',
        }
      ]
    };
  }
  render () {
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        {this.state.monsters.map((monster) => {
          return <h1>{monster.name}</h1>
        })}
      </div>
    );
  }
}


export default App;
