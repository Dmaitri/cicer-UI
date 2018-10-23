import axios from 'axios';

const API_URL = 'http://localhost:9900/data';

export function testAction() {
  return function (dispatch) {
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

export function getConfigDataForProject(filename) {
  return function (dispatch) {
    var url = `${API_URL}/${filename}`;
    return axios.get(url)
      .then(response => {
        dispatch({
          type: 'GET_CONFIGDATA_FORPROJECT',
          payload: response.data
        })
        return response.data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      })
  }
}

export function putConfigData(id, data) {
  return function (dispatch) {
    return axios.put(`${API_URL}/config/${id}`, data)
      .then(response => {
        return "success";
      })
      .catch(err => {
        throw err;
      })
  }
}