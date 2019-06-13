import React from 'react';
import { connect } from 'react-redux';
import { getConfigDataForProject, putConfigData, postConfigData } from '../../actions/apiAction';
import ProcessStatusEditForm from '../forms/processStatusEditForm';
import { reduxForm } from 'redux-form';

export class ProcessStatusEditPage extends React.Component {
    componentWillMount() {
        this.props.getConfigDataForProject("processstatus", this.props.selectedProject.selectedProject);
    }
    componentWillReceiveProps(nextProps) {
        const { selectedProject } = this.props;
        if (nextProps.selectedProject.selectedProject != selectedProject.selectedProject) {
            this.props.getConfigDataForProject("processstatus", nextProps.selectedProject.selectedProject);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedProject.selectedProject !== prevProps.selectedProject.selectedProject) {
            this.props.getConfigDataForProject("processstatus", this.props.selectedProject.selectedProject);
        }
    }

    submitPut = (values) => {
        document.getElementById("tag").innerHTML = "Processing.."
        this.props.putConfigData("processstatus", values["id"], values)
            .then(res => {
                if (document.getElementById("tag")) {
                    document.getElementById("tag").innerHTML = "success!!!"
                }
                this.props.getConfigDataForProject("processstatus", this.props.selectedProject.selectedProject);
            })
            .catch(err => {
                console.log(err);
            })
    }

    submitPost = (values) => {
        document.getElementById("tag").innerHTML = "Processing.."
        this.props.postConfigData("processstatus", values)
            .then(res => {
                if (document.getElementById("tag")) {
                    document.getElementById("tag").innerHTML = "success!!!"
                }
                this.props.getConfigDataForProject("processstatus", this.props.selectedProject.selectedProject);
            })
            .catch(err => {
                console.log(err);
            })
    }

    filterData(configData) {
        let dataObj = {};
        for (var i = 0; i < configData.length; i++) {
            var data = configData[i];
            Object.keys(data).forEach(element => {
                dataObj[element] = data[element];
            })
        }
        return dataObj;
    }

    render() {
        let dataObj = this.filterData(this.props.configData)

        if (Object.keys(dataObj).length === 0 && dataObj.constructor === Object) {
            dataObj["projectname"] = this.props.selectedProject.selectedProject;
            return (
                <div>
                    <ProcessstatuseditForm initialValues={dataObj} onSubmit={this.submitPost} />
                    <h3>No Data Available related to this project</h3>
                    <h6 id="tag"></h6>
                </div>
            );
        }
        else {
            return (
                <div>
                    <ProcessstatuseditForm initialValues={dataObj} onSubmit={this.submitPut} />
                    <h6 id="tag"></h6>
                </div>
            );
        }
    }
}

let ProcessstatuseditForm = reduxForm({
    form: 'processstatuseditForm',
    enableReinitialize: true,
})(ProcessStatusEditForm);

function mapStateToProps(state) {
    return {
        selectedProject: state.selectedProject.selectedProject,
        configData: state.configData
    };
}

const mapActionsToDispatch = (dispatch) => ({
    getConfigDataForProject: (filename, projectname) => { return dispatch(getConfigDataForProject(filename, projectname)) },
    putConfigData: (filename,id, data) => { return dispatch(putConfigData(filename,id, data)) },
    postConfigData: (filename,data) => { return dispatch(postConfigData(filename,data)) }
});
export default connect(mapStateToProps, mapActionsToDispatch)(ProcessStatusEditPage);