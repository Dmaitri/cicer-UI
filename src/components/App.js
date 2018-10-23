// This component handles the App template used on every page.
import React from 'react';
import Dropdown from 'react-dropdown';
import { connect } from 'react-redux';
import { testAction } from '../actions/index';
import { selectProject } from '../actions/projectActions';
import { Link, IndexLink } from 'react-router';
import 'react-dropdown/style.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projectName: '' }
  }

  handleProjectChange(event) {
    this.props.selectProject(event.value);
  }


  componentWillMount() {
    this.props.testAction();
  }

  render() {
    var arr = [];
    if (this.props.projects[0] != undefined) {
      for (var i = 0; i < this.props.projects[0].length; i++) {
        var x = this.props.projects[0];
        var y = x[i]["Name"];
        arr.push(y);
      }
    }
    return (
      <div className="container-fluid">
        <h1><b>Talentica</b></h1>
        <div className="jumbotron">
          <h6>Select Project:</h6>
          <Dropdown options={arr} value={this.props.selectedProject} placeholder="Select an option" onChange={(e) => this.handleProjectChange(e)} />
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
    selectedProject: state.selectedProject,
  };
}

const mapActionsToDispatch = (dispatch) => ({
  testAction: () => dispatch(testAction()),
  selectProject: (project) => dispatch(selectProject(project))
});

export default connect(mapStateToProps, mapActionsToDispatch)(App);


