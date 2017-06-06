import { render } from 'inferno';
import { Provider } from 'inferno-redux'; // builds of <Component> in inferno-component
import { createStore } from 'redux';
import App from './App';        //User interface
//import GameEngine from './Engine' // <Provider store={ store }><App /><GameEngine /></Provider>, App overlays over GameEngine, controls control either App or Game
import './styling/index.css';
import { reducer } from './actions.js';

const store = createStore(reducer);

render(<Provider store={ store }><App /></Provider>, document.getElementById('app'));
