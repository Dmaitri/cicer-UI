import React from 'react';
import { Link } from 'react-router';
import * as files1 from '../json/fileData';
import { connect } from 'react-redux';
import {selectProject} from '../../actions/projectActions';

export class ConfigurationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { files: files1.files, projectName: props.projectName };
    }

    // onclickHandle(files) {
    //     this.setState({ fileName: files })
    // }

    // componentWillReceiveProps(props) {
    //     this.setState({ projectName: props.projectName })
    // }

    createFileRow(files) {
        return (
            <tr key={files.id}>
                <td>{files.id}</td>
                <td>{files.fileName}</td>
                <td><Link to={files.fileName.replace('.json',"edit").toLowerCase()} activeClassName="active">Edit</Link></td>
                {/* <td onClick={() => this.onclickHandle(files.fileName)}>Edit</td> */}
            </tr>
        );
    }
    render() {
        return (
            <div>
                <h1>Configurations:</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Configuration File Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.files.map(this.createFileRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {  
    return {
      selectedProject: state.selectedProject.selectedProject
    };
  }
  
  const mapActionsToDispatch = (dispatch) => ({
    selectProject: (project,id) => dispatch( selectProject(project,id) ),
  });
  
  export default connect(mapStateToProps, mapActionsToDispatch)(ConfigurationPage);  

  
//export default ConfigurationPage;