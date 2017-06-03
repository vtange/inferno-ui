import { version } from 'inferno';
import { connect } from 'inferno-redux'; // connect dispatcher to renderer for databinding
import Component from 'inferno-component';
import Logo from './styling/logo';
import './styling/App.css';
import { nameChange } from "./actions";

function createHandlers (dispatch){
    const onClick = e => {
        e.preventDefault();
        dispatch(nameChange('Jerry'));
    };
    return {
      onClick
    }
}

function getPropsFromState (state){
  return {
    name: state.name
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handlers = createHandlers(this.props.dispatch);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo width="80" height="80" />
          <h2>{`Welcome to Inferno ${version}, `+this.props.name}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code onClick={ this.handlers.onClick }>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect(getPropsFromState)(App); //export App, all wired and good to go!
