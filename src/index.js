import { View } from './components';        //User interface
import './styling/index.css';
import { createDispatch, createStream, render } from './framework';
import { map, scan, fromEvent } from 'most';
import reducer from './reducers';
import { initialState } from './constants/state';
import { keyDown, keyUp } from './actions'

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

// Initiate Controller
const kDown = fromEvent('keydown', document)
kDown.observe(event => keyDown(event));

const kUp = fromEvent('keyup', document)
kUp.observe(event => keyUp(event));