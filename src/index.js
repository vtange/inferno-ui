import { render } from 'inferno';
import { Provider } from 'inferno-redux'; // builds of <Component> in inferno-component
import { createStore } from 'redux';
import App from './App';        //User interface
//import GameEngine from './Engine' // <Provider store={ store }><App /><GameEngine /></Provider>, App overlays over GameEngine, controls control either App or Game
import './styling/index.css';

var initialstate = {
    name: 'Tom'
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':    
      return {
        name: action.name
      }
    default:
      return initialstate;
  }
}
const store = createStore(reducer);

render(<Provider store={ store }><App /></Provider>, document.getElementById('app'));
