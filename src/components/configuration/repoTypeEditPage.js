import React from 'react';
import { connect } from 'react-redux';
import { getConfigDataForProject } from '../../actions';
import RepoTypeEditForm from '../forms/repoTypeEditForm';
import { reduxForm } from 'redux-form';

export class RepoTypeEditPage extends React.Component {
    componentWillMount() {
        this.props.getConfigDataForProject("repotype");
    }

    submit(values) {
        this.props.putConfigData(values["Id"], values)
            .then(res => {
                document.getElementById("tag").innerHTML = "success!!!"
                this.props.getConfigDataForProject("repotype");
            })
            .catch(err => {
                console.log(err);
            })
    }

    filterData(configData) {
        let dataObj = {};
        for (var i = 0; i < configData.length; i++) {
            var data = configData[i];
            if (data["projectname"] == this.props.selectedProject) {
                Object.keys(data).forEach(element => {
                    dataObj[element] = data[element];
                })
            }
        }
        return dataObj;
    }
    render() {
        let dataObj = this.filterData(this.props.configData)
        if (Object.keys(dataObj).length === 0 && dataObj.constructor === Object) {
            return (<h3>No Data Available related to this project</h3>)
        }
        else {
            return (
                <RepotypeditForm initialValues={dataObj} onSubmit={this.submit.bind(this)}></RepotypeditForm>
            );
        }
    }
}

let RepotypeditForm = reduxForm({
    form: 'repotypeditForm',
    enableReinitialize: true,
})(RepoTypeEditForm);

function mapStateToProps(state) {
    return {
        selectedProject: state.selectedProject,
        configData: state.configData
    };
}

const mapActionsToDispatch = (dispatch) => ({
    getConfigDataForProject: (filename) => { return dispatch(getConfigDataForProject(filename)) },
});

export default connect(mapStateToProps, mapActionsToDispatch)(RepoTypeEditPage);
