import React from 'react';
import { connect } from 'react-redux';
import { getConfigDataForProject, patchConfigData } from '../../actions';
import { reduxForm, Field } from 'redux-form';
import EmailAliasesEditForm from '../forms/emailAliasesEditForm';

export class EmailAliasesPage extends React.Component {
    componentWillMount() {
        this.props.getConfigDataForProject("emailalias");
    }

    filterData(configData) {
        let x = [];
        let key, value, id;
        // this.props.configData.map(element => {
        let element = this.props.configData;
        for (var i = 0; i < element.length; i++) {
            var y = element[i];
            if (y["projectname"] == this.props.selectedProject) {
                Object.keys(y).forEach(ele => {
                    //     if (ele != "projectname" && ele != "id") {
                    //  x.push({ key: element, value: y[element] })
                    if (ele == "email") {
                        key = y[ele]
                    }
                    else if (ele == "id") {
                        id = y[ele]
                    }
                    //  }
                })

                x.push({ "key1": 50000 + i, "key2": id })
            }
        }
        return x;
    }

    initialValues(configData) {
        let x = [];
        let key, value, id;
        // this.props.configData.map(element => {
        let element = this.props.configData;
        for (var i = 0; i < element.length; i++) {
            var y = element[i];
            if (y["projectname"] == this.props.selectedProject) {
                Object.keys(y).forEach(ele => {
                    //     if (ele != "projectname" && ele != "id") {
                    //  x.push({ key: element, value: y[element] })
                    if (ele == "email") {
                        key = y[ele]
                    }
                    if (ele == "alias") {
                        value = y[ele]
                    }
                    else if (ele == "id") {
                        id = y[ele]
                    }
                    //  }
                })

                x[50000 + i] = key;
                x[id] = value
                // x.push({ key:key })
            }
        }
        return x;
    }

    submit=(values)=> {
        // console.log(this.props.configData);
        let arr = this.props.configData;
        arr.forEach(ele => {
            if (ele["projectname"] == this.props.selectedProject) {
                if (ele["alias"] != values[ele["id"]]) {
                    // let id=ele["id"];
                    // let x=
                    this.props.patchConfigData("emailalias", ele["id"], values[ele["id"]])
                        .then(res => {
                            document.getElementById("tag").innerHTML = "success!!";
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
        let dataArr = this.initialValues(this.props.configData)

        return (
            <div>
                <EmailAliaseseditForm fields={dataObj} initialValues={dataArr} onSubmit={this.submit}></EmailAliaseseditForm>
                <h6 id="tag"></h6>
            </div>
        );
    }
}

let EmailAliaseseditForm = reduxForm({
    form: 'emailaliaseseditForm',
    enableReinitialize: true,
})(EmailAliasesEditForm);


function mapStateToProps(state) {
    return {
        selectedProject: state.selectedProject,
        configData: state.configData
    };
}

const mapActionsToDispatch = (dispatch) => ({
    getConfigDataForProject: (filename) => { return dispatch(getConfigDataForProject(filename)) },
    patchConfigData: (filename,id,data) => { return dispatch(patchConfigData(filename,id,data)) }
});

export default connect(mapStateToProps, mapActionsToDispatch)(EmailAliasesPage);
