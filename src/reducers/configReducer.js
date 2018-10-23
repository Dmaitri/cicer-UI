const configData = [];

export function configReducer(state = configData, action) {
  switch (action.type) {
    case 'GET_CONFIGDATA_FORPROJECT':
      return action.payload;
    default:
      return state;
  }
}