import { combineReducers } from 'redux';  
import {projectReducer,selectProjectReducer} from './projectReducer';
import {configReducer} from './configReducer';

const  store = {
    projects: projectReducer,
    selectedProject: selectProjectReducer,
    configData: configReducer
}
 const rootReducer = combineReducers(store);

 export default rootReducer;