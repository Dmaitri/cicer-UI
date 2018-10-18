import React from 'react';
import * as files1 from '../json/fileData';
import ConfigEditPage from './configEditPage';
import EmailAliasesPage from './emailAliasePage';
import ProcessStatusEditPage from './processStatusEditPage';
import RepoTypeEditPage from './repoTypeEditPage';
import MyTable from './git-log-anamolyEditPage';
import { connect } from 'react-redux';
import {selectedProject} from 'E:\\new-master\\src\\actions\\projectActions';


export class ConfigurationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { files: files1.files, projectName: props.projectName };
    }

    onclickHandle(files) {

        this.setState({ fileName: files })
    }

    componentWillReceiveProps(props) {
        this.setState({ projectName: props.projectName })
    }

    createFileRow(files) {
        return (
            <tr key={files.id}>
                <td>{files.id}</td>
                <td>{files.fileName}</td>
                <td onClick={() => this.onclickHandle(files.fileName)}>Edit</td>
            </tr>
        );
    }
    render() {

        if (this.props.selectedProject == "config.json")
            return (
                <ConfigEditPage projectName={this.props.projectName}></ConfigEditPage>
            )
        else if (this.props.selectedProjecte == "emailAliases.json")
            return (
                <EmailAliasesPage projectName={this.state.projectName}></EmailAliasesPage>
            )

        else if (this.props.selectedProject == "processStatus.json")
            return (
                <ProcessStatusEditPage projectName={this.state.projectName}></ProcessStatusEditPage>
            )

        else if (this.props.selectedProject == "repoType.json")
            return (
                <RepoTypeEditPage projectName={this.state.projectName}></RepoTypeEditPage>
            )

        else if (this.props.selectedProject == "git-log-anamoly.json")
            return (
                <MyTable projectName={this.state.projectName}></MyTable>
            )
        else {
            return (
                <h1 > x</h1 >
            )

        }
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
      projects: state.projects
    };
  }
  
  const mapActionsToDispatch = (dispatch) => ({
    selectProject: (project) => dispatch( selectedProject(project) ),
  });
  
  export default connect(mapStateToProps, mapActionsToDispatch)(ConfigurationPage);  

  
//export default ConfigurationPage;