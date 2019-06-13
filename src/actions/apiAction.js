import {get,post,put,patch} from '../api/api';

export function getProjects() {
  return function (dispatch) {
    get(dispatch,'GET_PROJECTS', '/projects');
  }
}
export function getUsers() {
  return function (dispatch) {
    return get(dispatch,'GET_USERS', `/Users`);
  }
}

export function getProjectDetail(projectname){
  return function(dispatch){
    return get(dispatch,'GET_PROJECT_DETAIL',`/projects/searchAll?name=${projectname}`)
    .then(res=>{
      return res;
    })
    .catch(err=>{
      console.log(err);
    })
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
export function associateUserAndProject(userEmail,projectId) {
  return function (dispatch) {
    return post(`/users_project/action/doAddAssocation`, {userEmail,projectId})
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
    return put(`/projects/action/doExecuteSPProjectsForProcess`, {"spName":"executeProjectsForProcess",data})
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