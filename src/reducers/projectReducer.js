const projects=[];

export function projectReducer(state = projects, action) {  
    switch(action.type) {
      case 'GET_PROJECTS':
        var x= [...state, action.payload ];
        return x;
      case 'SELECT_PROJECT':
        return [...state,action.projcet]
    }
    return state;
  }

const project='';
  export function selectedProjectReducer(state = project, action) {  
    switch(action.type) {
      case 'SELECT_PROJECT':
        return [...state,action.project]
    }
    return state;
  }