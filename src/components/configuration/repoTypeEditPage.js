import React from 'react';
import { connect } from 'react-redux';
import { getConfigDataForProject, patchConfigDataRepo } from '../../actions/apiAction';
import RepoTypeEditForm from '../forms/repoTypeEditForm';
import { reduxForm } from 'redux-form';

export class RepoTypeEditPage extends React.Component {
    componentWillMount() {
        this.props.getConfigDataForProject("repotype", this.props.selectedProject);
    }

    componentWillReceiveProps(nextProps) {
        const { selectedProject } = this.props;
        if (nextProps.selectedProject != selectedProject) {
            this.props.getConfigDataForProject("repotype", nextProps.selectedProject);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedProject !== prevProps.selectedProject) {
            this.props.getConfigDataForProject("repotype", this.props.selectedProject);
        }
    }
    submit = (values) => {
        let arr = this.props.configData;
        arr.forEach(ele => {
            if (ele["projectname"] == this.props.selectedProject) {
                if (ele["repotype"] != values[ele["Id"]]) {
                    this.props.patchConfigData("repotype", ele["Id"], values[ele["Id"]])
                        .then(res => {
                            document.getElementById("tag").innerHTML = "success!!";
                            this.props.getConfigDataForProject("repotype", this.props.selectedProject);
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
            }
        })
    }

    filterData(configData) {
        let x = [];
        let key, value, id;
        let num = 500000;
        // this.props.configData.map(element => {
        let element = this.props.configData;
        for (var i = 0; i < element.length; i++) {
            var y = element[i];
            if (y["projectname"] == this.props.selectedProject) {
                Object.keys(y).forEach(ele => {
                    //     if (ele != "projectname" && ele != "id") {
                    //  x.push({ key: element, value: y[element] })
                    if (ele == "reponame") {
                        key = y[ele]
                    }
                    else if (ele == "Id") {
                        id = y[ele]
                    }
                    //  }
                })

                x.push({ "key1": "key1" + id, "key2": "key2"+id })
            }
        }
        return x;
    }

    initialValues(configData) {
        let x = {};
        let key, value, id;
        let num = 500000;
        // this.props.configData.map(element => {
        let element = this.props.configData;
        for (var i = 0; i < element.length; i++) {
            var y = element[i];
            if (y["projectname"] == this.props.selectedProject) {
                Object.keys(y).forEach(ele => {
                    //     if (ele != "projectname" && ele != "id") {
                    //  x.push({ key: element, value: y[element] })
                    if (ele == "reponame") {
                        key = y[ele]
                    }
                    if (ele == "repotype") {
                        value = y[ele]
                    }
                    else if (ele == "Id") {
                        id = y[ele]
                    }
                    //  }
                })

                x["key1" + id] = key;
                x["key2"+id] = value
                // x.push({ key:key })
            }
        }
        return x;
    }

    submit = (values) => {
        document.getElementById("tag").innerHTML = "Processing.."
        let arr = this.props.configData;
        arr.forEach(ele => {
            if (ele["projectname"] == this.props.selectedProject) {
                if (ele["repotype"] != values["key2"+ele["Id"]]) {
                    this.props.patchConfigData("repotype", ele["Id"], values["key2"+ele["Id"]])
                        .then(res => {
                            document.getElementById("tag").innerHTML = "success!!";
                            this.props.getConfigDataForProject("repotype", this.props.selectedProject);
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
            }
        })
    }

    render() {
        let dataObj = this.filterData(this.props.configData)
        let dataArr = this.initialValues(this.props.configData);
        if (Object.keys(dataObj).length === 0 && dataObj.constructor === Object) {
            return (<h3>No Data Available related to this project</h3>)
        }
        else {
            return (
                <div>
                    <RepotypeditForm initialValues={dataArr} fields={dataObj} onSubmit={this.submit}></RepotypeditForm>
                    <h6 id="tag"></h6>
                </div>
            );
        }
    }
}

let RepotypeditForm = reduxForm({
    form: 'repotypeditForm',
    enableReinitialize: true
})(RepoTypeEditForm);

function mapStateToProps(state) {
    return {
        selectedProject: state.selectedProject,
        configData: state.configData
    };
}

const mapActionsToDispatch = (dispatch) => ({
    getConfigDataForProject: (filename, projectname) => { return dispatch(getConfigDataForProject(filename, projectname)) },
    patchConfigData: (filename, id, data) => { return dispatch(patchConfigDataRepo(filename, id, data)) }
});

export default connect(mapStateToProps, mapActionsToDispatch)(RepoTypeEditPage);
