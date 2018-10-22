import React from 'react';
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
                <td><a href={files.fileName+"edit"}>Edit</a></td>
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
      selectedProject: state.selectedProject
    };
  }
  
  const mapActionsToDispatch = (dispatch) => ({
    selectProject: (project) => dispatch( selectProject(project) ),
  });
  
  export default connect(mapStateToProps, mapActionsToDispatch)(ConfigurationPage);  

  
//export default ConfigurationPage;