import React from 'react';
import { connect } from 'react-redux';
import { getConfigDataForProject, putConfigData } from '../../actions';
import ConfigEditForm from '../forms/configEditForm';
import { reduxForm } from 'redux-form';

export class ConfigEditPage extends React.Component {
    componentWillMount() {
        this.props.getConfigDataForProject("config");
    }

    submit(values) {
        this.props.putConfigData(values["id"], values)
            .then(res => {
                document.getElementById("tag").innerHTML = "success!!!"
                this.props.getConfigDataForProject("config");
            })
            .catch(err => {
                console.log(err);
            })
    }

    filterData(configData) {
        let dataObj = {};
        for (var i = 0; i < configData.length; i++) {
            var data = configData[i];
            if (data["Projectname"] == this.props.selectedProject) {
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
                <div>
                    <ConfigeditForm initialValues={dataObj} onSubmit={this.submit.bind(this)} />
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
    getConfigDataForProject: (filename) => { return dispatch(getConfigDataForProject(filename)) },
    putConfigData: (id, data) => { return dispatch(putConfigData(id, data)) }
});

export default connect(mapStateToProps, mapActionsToDispatch)(ConfigEditPage);
