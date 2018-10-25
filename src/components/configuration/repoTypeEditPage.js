import React from 'react';
import { connect } from 'react-redux';
import { getConfigDataForProject } from '../../actions';
import RepoTypeEditForm from '../forms/repoTypeEditForm';
import { reduxForm } from 'redux-form';

export class RepoTypeEditPage extends React.Component {
    componentWillMount() {
        this.props.getConfigDataForProject("repotype");
    }

    submit=(values)=> {
        this.props.putConfigData(values["Id"], values)
            .then(res => {
                document.getElementById("tag").innerHTML = "success!!!"
                this.props.getConfigDataForProject("repotype");
            })
            .catch(err => {
                console.log(err);
            })
    }

    // filterData(configData) {
    //     let dataObj = {};
    //     for (var i = 0; i < configData.length; i++) {
    //         var data = configData[i];
    //         if (data["projectname"] == this.props.selectedProject) {
    //             Object.keys(data).forEach(element => {
    //                 dataObj[element] = data[element];
    //             })
    //         }
    //     }
    //     return dataObj;
    // }
    // filterDataArr(configData) {
    //     let dataObj = [];
    //     let key, value;
    //     for (var i = 0; i < configData.length; i++) {
    //         var data = configData[i];
    //         if (data["projectname"] == this.props.selectedProject) {
    //             Object.keys(data).forEach(element => {
    //                 if (element == "reponame")
    //                     key = data[element];
    //                 if (element == "repotype")
    //                     value = data[element];
    //             })
    //             dataObj.push({key,value});

    //         }
    //     }
    //     return dataObj;
    // }
    filterData(configData) {
        let x = [];
        let key,value,id;
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
                
                x.push({ "key1":key.replace(/[^a-zA-Z ]/g, ""), "key2":id })
            }
        }
        return x;
    }

    initialValues(configData) {
        let x = [];
        let key,value,id;
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
               
                x[key.replace(/[^a-zA-Z ]/g, "")]=key;
                x[id]=value
               // x.push({ key:key })
            }
        }
        return x;
    }
    render() {
        let dataObj = this.filterData(this.props.configData)
        let dataArr=this.initialValues(this.props.configData);
        if (Object.keys(dataObj).length === 0 && dataObj.constructor === Object) {
            return (<h3>No Data Available related to this project</h3>)
        }
        else {
            return (
                <RepotypeditForm initialValues={dataArr} fields={dataObj} onSubmit={this.submit}></RepotypeditForm>
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
    getConfigDataForProject: (filename) => { return dispatch(getConfigDataForProject(filename)) },
});

export default connect(mapStateToProps, mapActionsToDispatch)(RepoTypeEditPage);
