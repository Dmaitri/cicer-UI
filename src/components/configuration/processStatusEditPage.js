import React from 'react';
import { connect } from 'react-redux';
import { getConfigDataForProject } from '../../actions';
import ProcessStatusEditForm from '../forms/processStatusEditForm';
import { reduxForm } from 'redux-form';

export class ProcessStatusEditPage extends React.Component {
    componentWillMount() {
        this.props.getConfigDataForProject("processstatus");
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
                <div>
                    <ProcessstatuseditForm initialValues={dataObj} onSubmit={this.submit.bind(this)} />
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
        selectedProject: state.selectedProject,
        configData: state.configData
    };
}

const mapActionsToDispatch = (dispatch) => ({
    getConfigDataForProject: (filename) => { return dispatch(getConfigDataForProject(filename)) },
});

export default connect(mapStateToProps, mapActionsToDispatch)(ProcessStatusEditPage);