import {get,post,put,patch} from '../api/api';

export function getProjects() {
  return function (dispatch) {
    get(dispatch,'GET_PROJECTS', '/projects');
  }
}

export function getConfigDataForProject(filename,projectname) {
  return function (dispatch) {
    return get(dispatch,'GET_CONFIGDATA_FORPROJECT',`/${filename}/searchAll?Projectname=${projectname}`)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      })
  }
}

export function putConfigData(filename,id, data) {
  return function (dispatch) {
    return put(`/${filename}/${id}`,data)
      .then(response => {
        return "success";
      })
      .catch(err => {
        throw err;
      })
  }
}

export function postConfigData(filename,data) {
  return function (dispatch) {
    return post(`/${filename}`,data)
      .then(response => {
        return "success";
      })
      .catch(err => {
        throw err;
      })
  }
}

export function createNewProject(data) {
  return function (dispatch) {
    return post(`/projects/action/doCreateNewProject`, data)
      .then(response => {
        return "success";
      })
      .catch(err => {
        throw err;
      })
  }
}

export function executeSP(data) {
  return function (dispatch) {
    put(`/projects/action/doExecuteSPProjectsForProcess`, {"spName":"executeProjectsForProcess",data})
      .then(response => {
        return "success";
      })
      .catch(err => {
        throw err;
      })
  }
}

export function patchConfigData(proj,id,data) {
  return function (dispatch) {
    return patch(`/${proj}/${id}`,{"alias":data})
      .then(response => {
        return "success";
      })
      .catch(err => {
        throw err;
      })
  }
}

export function patchConfigDataRepo(proj,id,data) {
  return function (dispatch) {
    return patch(`/${proj}/${id}`,{"repotype":data})
      .then(response => {
        return "success";
      })
      .catch(err => {
        throw err;
      })
  }
}