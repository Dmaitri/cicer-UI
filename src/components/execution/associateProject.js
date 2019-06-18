import * as React from "react";
import Select from 'react-select';
import { getUsers, associateUserAndProject } from '../../actions/apiAction';
import { connect } from 'react-redux';
import { selectProject, selectProjectId, selectUser, selectUserId } from '../../actions/projectActions';


export class AssociateProject extends React.Component {
  constructor(props) {
    super(props)
    this.state = { intervalId: 0 }
    this.state = {
      username: ''
    }

    this.updateInput = this.updateInput.bind(this);
  }


  handleUserChange(event) {
    this.props.selectUser(event.label);
    this.props.selectUserId(event.value)
  }

  updateInput(event) {
    this.setState({ username: event.target.value })
  }

  componentWillMount() {
    this.props.getUsers();
  }

  filterData() {
    var arr = [];
    if (this.props.users[0] != undefined) {
      for (var i = 0; i < this.props.users[0].length; i++) {
        var x = this.props.users[0];
        var y = x[i]["UserEmail"];
        arr.push({ value: x[i]["UserID"], label: y });
      }
    }
    return arr;
  }
  handleClick = () => {
    console.log(this.props.selectedUser.selectedUserId);
    console.log(this.props.selectedUser.selectedUser + this.props.selectedProject.selectedProjectId);
    this.props.associateUserAndProject(this.props.selectedUser.selectedUser, this.props.selectedProject.selectedProjectId).then(res => {
      if (document.getElementById("tag")) {
        document.getElementById("tag").innerHTML = "success!!!"
      }
      alert("User Added");
      //this.props.testAction();
    })
      .catch(err => {
        // updateErrorMessage(err);
        alert(err.response.data.message);
        //this.setState({errorMessage : err.message})
        console.log(err.response.data.message);
      })

  }
  handleNewUserAdd = () => {
    //console.log(this.state.username);
    this.props.associateUserAndProject(this.state.username, this.props.selectedProject.selectedProjectId).then(res => {
      if (document.getElementById("tag")) {
        document.getElementById("tag").innerHTML = "success!!!"
      }
      alert("User Added");
    })
      .catch(err => {
        alert(err.response.data.message);
        console.log(err);
      })
  }

  render() {
    let projArr = this.filterData(this);

    return (

      <div>
        <label htmlFor="Select user email">Select user email:</label>
        <Select options={projArr} onChange={(e) => this.handleUserChange(e)} />
        <button type="submit" onClick={this.handleClick} >Submit</button>
        <div style={{ marginTop: 100 }}>
          <label htmlFor="Username">Add New User to project:</label>
          <input type="text" onChange={this.updateInput} placeholder="Enter user email"></input>
          <button type="submit" onClick={this.handleNewUserAdd} >Submit</button>

        </div>
      </div>
    );
  }


}


function mapStateToProps(state) {
  return {
    users: state.users,
    selectedUser: state.selectedUser,
    selectedProject: state.selectedProject,
    username: state.username,
    errorMessage: state.errorMessage,
  };
}

const mapActionsToDispatch = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),
  selectProject: (project) => dispatch(selectProject(project)),
  selectProjectId: (id) => dispatch(selectProjectId(id)),
  selectUser: (user) => dispatch(selectUser(user)),
  selectUserId: (userId) => dispatch(selectUserId(userId)),
  associateUserAndProject: (userEmail, projectId) => { return dispatch(associateUserAndProject(userEmail, projectId)) },

  //getConfigDataForProject: (filename, projectname) => { return dispatch(getConfigDataForProject(filename, projectname)) },
});

export default connect(mapStateToProps, mapActionsToDispatch)(AssociateProject);