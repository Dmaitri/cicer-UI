import React from 'react';
import { connect } from 'react-redux';
import { getConfigDataForProject, patchConfigData } from '../../actions/apiAction';
import { reduxForm, Field } from 'redux-form';
import EmailAliasesEditForm from '../forms/emailAliasesEditForm';

export class EmailAliasesPage extends React.Component {
    componentWillMount() {
        this.props.getConfigDataForProject("emailalias", this.props.selectedProject);
    }

    componentWillReceiveProps(nextProps) {
        const { selectedProject } = this.props;
        if (nextProps.selectedProject != selectedProject) {
            this.props.getConfigDataForProject("emailalias", nextProps.selectedProject);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedProject !== prevProps.selectedProject) {
            this.props.getConfigDataForProject("emailalias", this.props.selectedProject);
        }
    }
    filterData() {
        let x = [];
        let key, value, id;
        let num=50000;
        // this.props.configData.map(element => {
        let element = this.props.configData;
        for (var i = 0; i < element.length; i++) {
            var y = element[i];
            if (y["projectname"] == this.props.selectedProject) {
                Object.keys(y).forEach(ele => {
                    if (ele == "email") {
                        key = y[ele]
                    }
                    else if (ele == "id") {
                        id = y[ele]
                    }
                })
                x.push({ "key1": num + i, "key2": id })
            }
        }
        return x;
    }

    initialValues() {
        let x = [];
        let key, value, id;
        let num=50000;
        // this.props.configData.map(element => {
        let element = this.props.configData;
        for (var i = 0; i < element.length; i++) {
            var y = element[i];
            if (y["projectname"] == this.props.selectedProject) {
                Object.keys(y).forEach(ele => {
                    if (ele == "email") {
                        key = y[ele]
                    }
                    if (ele == "alias") {
                        value = y[ele]
                    }
                    else if (ele == "id") {
                        id = y[ele]
                    }
                })
                x[num + i] = key;
                x[id] = value
            }
        }
        return x;
    }

    submit=(values)=> {
        let arr = this.props.configData;
        arr.forEach(ele => {
            if (ele["projectname"] == this.props.selectedProject) {
                if (ele["alias"] != values[ele["id"]]) {
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
        let dataObj = this.filterData()
        let dataArr = this.initialValues()
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
    getConfigDataForProject: (filename,projectname) => { return dispatch(getConfigDataForProject(filename,projectname)) },
    patchConfigData: (filename,id,data) => { return dispatch(patchConfigData(filename,id,data)) }
});

export default connect(mapStateToProps, mapActionsToDispatch)(EmailAliasesPage);
