import React from 'react';
import ExecuteSPForm from '../forms/executeSPForm';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {executionSPModel} from './Model/executionSPModel'
import { executeSP, getProjectDetail , getProcessStatus} from '../../actions/apiAction';

export class ExecuteSP extends React.Component {
    constructor(props) {
        super(props)
        this.state = { intervalId: 0 }
    }

    
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
        if (this.props.selectedProject != nextProps.selectedProject) {
            this.props.processStatus(nextProps.selectedProject.selectedProject)
        }
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
                                if (document.getElementById("tag")) {
                                    document.getElementById("tag").innerHTML = "success!!!"
                                }
                                clearInterval(this.state.intervalId);
                            }
                            else if (res[0].ExecuteProcessStatus == 3 || res[0].UpdateConfigStatus == 3 || res[0].ConfigSynStatus == 3) {
                                if (document.getElementById("tag")) {
                                    document.getElementById("tag").innerHTML = "Failed!!!"
                                }
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
       
       var dataArr;
        if (this.props.processStatusArr && this.props.processStatusArr.length) {
            console.log(this.props.processStatusArr[0]);
           let statusObj = new executionSPModel(this.props.processStatusArr[0])
           console.log(statusObj);
           dataArr = {
            "projectNames": this.props.selectedProject.selectedProject,
            "mainGitAnalysis": statusObj.mainGitAnalysis == true ? 1:0,
            "prepareMainStatus": statusObj.prepareMainStatus == true ? 1:0,
            "mainCiceroAnalysis": statusObj.mainCiceroAnalysis == true ? 1:0,
            "mainSonarAnalysis": statusObj.mainSonarAnalysis == true ? 1:0,
            "productivityjob": statusObj.productivityjob == true ? 1:0,
            "SonarETL": statusObj.sonarETL == true ? 1:0,
            "analytics": statusObj.analytics == true ? 1:0,
            "combineCeicroModelsOfall": statusObj.combineCeicroModelsOfall == true ? 1:0,
            "UpdateReportStatus":1,
            "lastRunDateMain": statusObj.last_run_mga_date,
            "lastRunDateprepareMain": statusObj.last_run_pms_date,
            "lastRunDatemainCicero" : statusObj.last_run_mca_date,
             "lastRunDatemainSonar": statusObj.last_run_msa_date,
           "lastRunDateproductivityjob": statusObj.last_run_pj_date,
            "lastRunDateSonarETL": statusObj.last_run_setl_date,
           "lastRunDateanalytics": statusObj.last_run_analytics_date,
           "lastRunDatecombineCeicroModelsOfall": statusObj.last_run_ccmoa_date     
        }
          
        } else {
       dataArr = {
            "projectNames": this.props.selectedProject.selectedProject,
            "mainGitAnalysis": 1,
            "prepareMainStatus": 1,
            "mainCiceroAnalysis": 1,
            "mainSonarAnalysis": 1,
            "productivityjob": 1,
            "SonarETL": 1,
            "analytics": 1,
            "combineCeicroModelsOfall": 1,
            "UpdateReportStatus":1
        }
        }
         
        
       
        return (
            <div>
                {this.props.selectedProject.selectedProject ? <Executespform initialValues={dataArr} onSubmit={this.submit} />
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
        processStatusArr: state.processStatus,
    };
}

const mapActionsToDispatch = (dispatch) => ({
    processStatus: (projectname) => dispatch(getProcessStatus(projectname)),
    executeSP: (data) => dispatch(executeSP(data)),
    getProjectDetail: (projectname) => dispatch(getProjectDetail(projectname))
});

export default connect(mapStateToProps, mapActionsToDispatch)(ExecuteSP);

