import { version } from 'inferno';
import Component from 'inferno-component';
import Logo from './styling/logo';
import './styling/App.css';

class App extends Component {
  render() {

    const store = this.context.store;
    const state = store.getState();
    const onClick = e => {
        e.preventDefault();
        store.dispatch({
            type: 'CHANGE_NAME',
            name: 'Jerry'
        });
    };

    return (
      <div className="App">
        <div className="App-header">
          <Logo width="80" height="80" />
          <h2>{`Welcome to Inferno ${version}, `+state.name}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code onClick={ onClick }>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
