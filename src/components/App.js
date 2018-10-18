// This component handles the App template used on every page.
import React from 'react';
import Header from './common/Header';
import Dropdown from 'react-dropdown';
import { connect } from 'react-redux';
import {testAction} from '../actions/index';
import {selectedProject} from 'E:\\new-master\\src\\actions\\projectActions';
import 'react-dropdown/style.css';

// const options = [
//   '5c', 'mist', 'vulcan'
// ]
// const defaultOption = options[0]

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projectName: '' }
  }

  handleProjectChange(event) {
   // this.setState({ projectName:event.value});
   this.props.selectedProject(event.value);
  }


  componentWillMount()
  {
    this.props.testAction();
  }

  render() {
    var arr=[];
    if(this.props.projects[0]!=undefined)
    {
    for(var i=0;i<this.props.projects[0].length;i++)
    {
      var x=this.props.projects[0];
      var y=x[i]["Name"];
      console.log(y);
      arr.push(y);
    }
  }
    return (
      <div className="container-fluid">
        <h1><b>Talentica</b></h1>
        <div className="jumbotron">
          <h6>Select Project:</h6>
          <Dropdown options={arr} value="Select a Project" placeholder="Select an option" onChange={(e) => this.handleProjectChange(e)} />
        </div>
        <Header projectName={this.state.projectName}></Header>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {  
  return {
    projects: state.projects,
  };
}

const mapActionsToDispatch = (dispatch) => ({
  testAction:()=> dispatch(testAction()),
  selectedProject: (project) => dispatch( selectedProject(project) )
});

export default connect(mapStateToProps, mapActionsToDispatch)(App);  


