import React from 'react';
import ExecuteSPForm from '../forms/executeSPForm';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { executeSP, getProjectDetail } from '../../actions/apiAction';

export class ExecuteSP extends React.Component {
    constructor(props) {
        super(props)
        this.state = { intervalId: 0 }
    }

    submit = (values) => {
        document.getElementById("tag").innerHTML = "Processing.."
        this.props.executeSP(values)
            .then(res => {
                this.state.intervalId = setInterval(() => {
                    debugger;
                    this.props.getProjectDetail(values.projectNames)
                        .then(res => {
                            if (res[0].ExecuteProcessStatus == 0 && res[0].UpdateConfigStatus == 0 && res[0].ConfigSynStatus == 0) {
                                document.getElementById("tag").innerHTML = "success!!!"
                                clearInterval(this.state.intervalId);
                            }
                            else if (res[0].ExecuteProcessStatus == 3 || res[0].UpdateConfigStatus == 3 || res[0].ConfigSynStatus == 3) {
                                document.getElementById("tag").innerHTML = "Failed!!!"
                                clearInterval(this.state.intervalId);
                            }
                        })
                }, 2000);
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
    getProjectDetail: (projectname) => dispatch(getProjectDetail(projectname))
});

export default connect(mapStateToProps, mapActionsToDispatch)(ExecuteSP);

