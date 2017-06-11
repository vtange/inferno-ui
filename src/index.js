import { View } from './components';        //User interface
//import GameEngine from './Engine' // <Provider store={ store }><App /><GameEngine /></Provider>, App overlays over GameEngine, controls control either App or Game
import './styling/index.css';
import { createDispatch, createStream, render } from './framework';
import { map, scan } from 'most';
import reducer from './reducers';
import { initialState, COUNT, SUBTITLE, TITLE } from './constants/state';

// Create stream of actions
const action$ = createStream();

// Generate a dispatch function for emitting actions through actions$
export const dispatch = createDispatch(action$);

// Use mapStateToView if using JSX or just use the View function directly
const mapStateToView = props => <View {...props} />;

// Data flow for the entire app
const state$ = scan(reducer, initialState, action$);
const vTree$ = map(mapStateToView, state$);

// Mount app, track virtual DOM tree updates, & automatically render changes
render(vTree$, document.getElementById('app'));