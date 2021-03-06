// This component handles the App template used on every page.
import React from 'react';
import Dropdown from 'react-dropdown';
import { connect } from 'react-redux';
import { getProjects } from '../actions/apiAction';
import { selectProject,selectProjectId } from '../actions/projectActions';
import { Link, IndexLink } from 'react-router';
import 'react-dropdown/style.css';
import Select from 'react-select';
import { getConfigDataForProject, putConfigData, postConfigData } from '../actions/apiAction';

export class App extends React.Component {
  handleProjectChange(event) {
    debugger;
    this.props.selectProject(event.label);
    this.props.selectProjectId(event.value)
  }

 
  componentWillMount() {
    this.props.testAction();
  }

  filterData() {
    var arr = [];
    if (this.props.projects[0] != undefined) {
      for (var i = 0; i < this.props.projects[0].length; i++) {
        var x = this.props.projects[0];
        var y = x[i]["Name"];
        arr.push({ value: x[i]["id"], label: y });
      }
    }
    return arr;
  }
  render() {
  //  this.props.getConfigDataForProject("config", this.props.selectedProject);

    let projArr = this.filterData(this);
    return (
      <div className="container-fluid">
        <h1><b>Talentica Value Measure 2.0 Admin Portal</b></h1>
        <div className="jumbotron">
          <h6>Select Project:</h6>
          {/* <Dropdown options={projArr} value={this.props.selectedProject} placeholder="Select an option" onChange={(e) => this.handleProjectChange(e)} /> */}
          <Select options={projArr} onChange= {(e) => this.handleProjectChange(e)} />
        </div>
        <div>
          <nav>
            <IndexLink to="/" activeClassName="active">Configuration</IndexLink>
            {" | "}
            <Link to="/execution" activeClassName="active">Execution</Link>
          </nav>
          {this.props.children}
        </div >
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects,
    selectedProject: state.selectedProject.selectedProject,
  };
}

const mapActionsToDispatch = (dispatch) => ({
  testAction: () => dispatch(getProjects()),
  selectProject: (project) => dispatch(selectProject(project)),
  selectProjectId: (id) => dispatch(selectProjectId(id)),

  getConfigDataForProject: (filename, projectname) => { return dispatch(getConfigDataForProject(filename, projectname)) },
});

export default connect(mapStateToProps, mapActionsToDispatch)(App);


