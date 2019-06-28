import { combineReducers } from 'redux';  
import {projectReducer,selectProjectReducer, userReducer, selectUserReducer, processStatusReducer} from './projectReducer';
import {configReducer} from './configReducer';
import { reducer as formReducer } from 'redux-form';


const  store = {
    projects: projectReducer,
    users:userReducer,
    processStatus: processStatusReducer,
    selectedProject: selectProjectReducer,
    selectedUser: selectUserReducer,
    // selectedProjectId:selectProjectReducer,
    configData: configReducer,
    form: formReducer
}
 const rootReducer = combineReducers(store);

 export default rootReducer;