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

export function userReducer(state = [], action) {
  switch (action.type) {
    case 'GET_USERS':
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
      return {...state,selectedProject:action.selectedProject};
      case 'SELECT_PROJECT_ID':
      return {...state,selectedProjectId:action.selectedProjectId};
    default:
      return state;
  }
}

export function selectUserReducer(state = '', action) {
  switch (action.type) {
    case 'SELECT_USER':
      return {...state,selectedUser:action.selectedUser};
      case 'SELECT_USER_ID':
      return {...state,selectedUserId:action.selectedUserId};
    default:
      return state;
  }
}