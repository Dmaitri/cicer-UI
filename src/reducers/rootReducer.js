import { combineReducers } from 'redux';  
import {projectReducer,selectProjectReducer} from './projectReducer';
import {configReducer} from './configReducer';
import { reducer as formReducer } from 'redux-form';

const  store = {
    projects: projectReducer,
    selectedProject: selectProjectReducer,
    configData: configReducer,
    form: formReducer
}
 const rootReducer = combineReducers(store);

 export default rootReducer;