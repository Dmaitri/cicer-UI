import React from 'react';
import { connect } from 'react-redux';
import { getConfigDataForProject, putConfigData, postConfigData } from '../../actions/apiAction';
import ConfigEditForm from '../forms/configEditForm';
import { reduxForm } from 'redux-form';

export class ConfigEditPage extends React.Component {
    componentWillMount() {
        this.props.getConfigDataForProject("config", this.props.selectedProject);
    }

    componentWillReceiveProps(nextProps) {
        const { selectedProject } = this.props;
        if (nextProps.selectedProject != selectedProject) {
            this.props.getConfigDataForProject("config", nextProps.selectedProject);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedProject !== prevProps.selectedProject) {
            this.props.getConfigDataForProject("config", this.props.selectedProject);
        }
    }

    submitPut = (values) => {
        document.getElementById("tag").innerHTML = "Processing.."
        this.props.putConfigData("config",values["id"], values)
            .then(res => {
                document.getElementById("tag").innerHTML = "success!!!"
                this.props.getConfigDataForProject("config", this.props.selectedProject);
            })
            .catch(err => {
                console.log(err);
            })
    }

    submitPost = (values) => {
        document.getElementById("tag").innerHTML = "Processing.."
        this.props.postConfigData("config",values)
            .then(res => {
                document.getElementById("tag").innerHTML = "success!!!"
                this.props.getConfigDataForProject("config", this.props.selectedProject);
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
            dataObj["Projectname"]=this.props.selectedProject;
            return (
                <div>
                    <ConfigeditForm initialValues={dataObj} onSubmit={this.submitPost} />
                    <h6>No data found related to this project.Add data</h6>
                    <h6 id="tag"></h6>
                </div>
            );
        }
        else {
            return (
                <div>
                    <ConfigeditForm initialValues={dataObj} onSubmit={this.submitPut} />
                    <h6 id="tag"></h6>
                </div>
            );
        }
    }
}

let ConfigeditForm = reduxForm({
    form: 'configeditForm',
    enableReinitialize: true,
})(ConfigEditForm);

function mapStateToProps(state) {
    return {
        selectedProject: state.selectedProject,
        configData: state.configData
    };
}
const mapActionsToDispatch = (dispatch) => ({
    getConfigDataForProject: (filename, projectname) => { return dispatch(getConfigDataForProject(filename, projectname)) },
    putConfigData: (filename,id, data) => { return dispatch(putConfigData(filename,id, data)) },
    postConfigData: (filename,data) => { return dispatch(postConfigData(filename,data)) }
});

export default connect(mapStateToProps, mapActionsToDispatch)(ConfigEditPage);
