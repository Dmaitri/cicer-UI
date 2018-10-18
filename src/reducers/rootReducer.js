import { combineReducers } from 'redux';  
import {projectReducer,selectedProjectReducer} from './projectReducer';

const  store = {
    projects: projectReducer,
    selectedProject: selectedProjectReducer
}
 const rootReducer = combineReducers(store);

 export default rootReducer;