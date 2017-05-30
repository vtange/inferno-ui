import { render } from 'inferno';
import { Provider } from 'inferno-redux'; // builds of <Component> in inferno-component
import { createStore } from 'redux';
import App from './App';
import './styling/index.css';

var initialstate = {
    name: 'Tom'
};

const reducer = function(state = initialstate, action) {
  switch (action.type) {
    case 'CHANGE_NAME':    
      return {
        name: action.name
      }
    default:
      return state;
  }
}
const store = createStore(reducer);

render(<Provider store={ store }><App /></Provider>, document.getElementById('app'));
