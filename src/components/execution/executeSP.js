import React from 'react';
import ExecuteSPForm from '../forms/executeSPForm';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { executeSP } from '../../actions/apiAction';

export class ExecuteSP extends React.Component {
    submit = (values) => {
        this.props.executeSP(values)
            .then(res => {
                document.getElementById("tag").innerHTML = "success!!!"
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        let dataArr = {
            "projectNames": this.props.selectedProject,
            "mainGitAnalysis": 1,
            "prepareMainStatus": 1,
            "mainCiceroAnalysis": 1,
            "mainSonarAnalysis": 1,
            "productivityjob": 1,
            "SonarETL": 1,
            "analytics": 1,
            "combineCeicroModelsOfall": 1
        }
        return (
            <div>
                {this.props.selectedProject ? <Executespform initialValues={dataArr} onSubmit={this.submit} />
                    : <Executespform onSubmit={this.submit} />}
                <h4 id="tag"></h4>
            </div>
        );
    }
}

let Executespform = reduxForm({
    form: 'executespform',
    enableReinitialize: true,
})(ExecuteSPForm);

function mapStateToProps(state) {
    return {
        selectedProject: state.selectedProject,
    };
}

const mapActionsToDispatch = (dispatch) => ({
    executeSP: (data) => dispatch(executeSP(data)),
});

export default connect(mapStateToProps, mapActionsToDispatch)(ExecuteSP);

