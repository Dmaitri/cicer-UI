//const projects=[];

export function projectReducer(state = [], action) {
  switch (action.type) {
    case 'GET_PROJECTS':
      var x = [...state, action.payload];
      return x;
    default:
      return state;
  }
}

//const selectedProject='';
export function selectProjectReducer(state = '', action) {
  switch (action.type) {
    case 'SELECT_PROJECT':
      return action.selectedProject;
    default:
      return state;
  }
}