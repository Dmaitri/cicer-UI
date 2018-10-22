const configData=[];

export function configReducer(state = configData, action) {  
    switch(action.type) {
      case 'GET_CONFIGDATA_FORPROJECT':
        var x= [...state, action.payload ];
        return x;
    }
    return state;
  }