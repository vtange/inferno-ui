const initialState = {
    name: 'Tom'
};

export function init() {
    return {
        type: 'INIT'
    }
}

export function nameChange(text) {
  return {
        type: 'CHANGE_NAME',
        name: text
    }
}

export function reducer(state, action) {
  switch (action.type) {
    case 'INIT':    
      return initialState;
    case 'CHANGE_NAME':    
      return {
        name: action.name
      }
    default:
      return initialState;
  }
}