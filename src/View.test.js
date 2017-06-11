import { View } from './components';        //User interface
//import GameEngine from './Engine' // <Provider store={ store }><App /><GameEngine /></Provider>, App overlays over GameEngine, controls control either App or Game
import './styling/index.css';
import { createDispatch, createStream, render } from './framework';
import { map, scan } from 'most';
import reducer from './reducers';
import { COUNT, SUBTITLE, TITLE } from './constants/state';

// Create stream of actions
const action$ = createStream();

// Generate a dispatch function for emitting actions through actions$
export const dispatch = createDispatch(action$);

/******************************************************************************
  Using a plain JS object to hold app state
*******************************************************************************/

const initialState = {
  [COUNT]: 0,
  [SUBTITLE]: 'Counter Demo',
  [TITLE]: 'Inferno + Most + FP',
};

// Use mapStateToView if using JSX or just use the View function directly
const mapStateToView = props => <View {...props} />;

// Data flow for the entire app
const state$ = scan(reducer, initialState, action$);
const vTree$ = map(mapStateToView, state$);

/*------------------------TEST START----------------------------*/

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(vTree$, div);
});
