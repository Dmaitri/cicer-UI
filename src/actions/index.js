import axios from 'axios';  
import displayProjects from '../actions/projectActions';

const API_URL = 'http://localhost:9900/data';  

export function testAction() {  
    return function(dispatch) {
      axios.get(`${API_URL}/projects`)
      .then(response => {
        dispatch({
            type: 'GET_PROJECTS',
            payload: response.data        
        });
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }