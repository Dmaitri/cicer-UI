import React from 'react'
import { Field } from 'redux-form';

const ExecuteSPForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
         <table >
                <tr>
                    <td> <label htmlFor="projectNames">Projectname:</label></td>
                    <Field
                        name="projectNames"
                        type="text"
                        component="input"
                        id="projectNames"
                        placeholder="Enter Project name here"
                        autoComplete="off"
                        disabled={true}
                    />
                  <label htmlFor="lastRun_Date" style= {{textAlign: 'center' , padding: 10, marginLeft: 30 }} >lastRun_Date</label>
               
                   {/* <label htmlFor="Status" style= {{textAlign: 'center' , marginRight: 10, marginLeft: 90}}>Status</label>  */}
                </tr>
                <tr>
                    <td> <label htmlFor="mainGitAnalysis">mainGitAnalysis:</label></td>
                    <Field
                        name="mainGitAnalysis"
                        type="text"
                        component="input"
                        id="mainGitAnalysis"
                        autoComplete="off"
                    />
                     <Field
                        name="lastRunDateMain"
                        type="text"
                        component="input"
                        id="lastRunDateMain"
                        autoComplete="off"
                        disabled={true}
                    />
                    {/* <Field
                        name="statusMain"
                        type="text"
                        component="input"
                        id="statusMain"
                        autoComplete="off"
                        disabled={true}
                    /> */}
                </tr>
                <tr>
                    <td> <label htmlFor="prepareMainStatus">prepareMainStatus:</label></td>
                    <Field
                        name="prepareMainStatus"
                        type="text"
                        component="input"
                        id="prepareMainStatus"
                        autoComplete="off"
                    />
                    <Field
                        name="lastRunDateprepareMain"
                        type="text"
                        component="input"
                        id="lastRunDateprepareMain"
                        autoComplete="off"
                        disabled={true}
                    />
                    {/* <Field
                        name="statusprepareMain"
                        type="text"
                        component="input"
                        id="statusprepareMain"
                        autoComplete="off"
                        disabled={true}
                    /> */}
                </tr>
                <tr>
                    <td> <label htmlFor="mainCiceroAnalysis">mainCiceroAnalysis:</label></td>
                    <Field
                        name="mainCiceroAnalysis"
                        type="text"
                        component="input"
                        id="mainCiceroAnalysis"
                        autoComplete="off"
                    />
                    <Field
                        name="lastRunDatemainCicero"
                        type="text"
                        component="input"
                        id="lastRunDatemainCicero"
                        autoComplete="off"
                        disabled={true}
                    />
                    {/* <Field
                        name="statusmainCicero"
                        type="text"
                        component="input"
                        id="statusmainCicero"
                        autoComplete="off"
                        disabled={true}
                    /> */}
                </tr>
                <tr>
                    <td> <label htmlFor="mainSonarAnalysis">mainSonarAnalysis:</label></td>
                    <Field
                        name="mainSonarAnalysis"
                        type="text"
                        component="input"
                        id="mainSonarAnalysis"
                        autoComplete="off"
                    />
                     <Field
                        name="lastRunDatemainSonar"
                        type="text"
                        component="input"
                        id="lastRunDatemainSonar"
                        autoComplete="off"
                        disabled={true}
                    />
                    {/* <Field
                        name="statusmainSonar"
                        type="text"
                        component="input"
                        id="statusmainSonar"
                        autoComplete="off"
                        disabled={true}
                    /> */}
                </tr>
                <tr>
                    <td> <label htmlFor="productivityjob">productivityjob:</label></td>
                    <Field
                        name="productivityjob"
                        type="text"
                        component="input"
                        id="productivityjob"
                        autoComplete="off"
                    />
                    <Field
                        name="lastRunDateproductivityjob"
                        type="text"
                        component="input"
                        id="lastRunDateproductivityjob"
                        autoComplete="off"
                        disabled={true}
                    />
                    {/* <Field
                        name="statusproductivityjob"
                        type="text"
                        component="input"
                        id="statusproductivityjob"
                        autoComplete="off"
                        disabled={true}
                    /> */}
                </tr>
                <tr>
                    <td> <label htmlFor="SonarETL">SonarETL:</label></td>
                    <Field
                        name="SonarETL"
                        type="text"
                        component="input"
                        id="SonarETL"
                        autoComplete="off"
                    />
                     <Field
                        name="lastRunDateSonarETL"
                        type="text"
                        component="input"
                        id="lastRunDateSonarETL"
                        autoComplete="off"
                        disabled={true}
                    />
                    {/* <Field
                        name="statusSonarETL"
                        type="text"
                        component="input"
                        id="statusSonarETL"
                        autoComplete="off"
                        disabled={true}
                    /> */}
                </tr>
                <tr>
                    <td> <label htmlFor="analytics">analytics:</label></td>
                    <Field
                        name="analytics"
                        type="text"
                        component="input"
                        id="analytics"
                        autoComplete="off"
                    />
                     <Field
                        name="lastRunDateanalytics"
                        type="text"
                        component="input"
                        id="lastRunDateanalytics"
                        autoComplete="off"
                        disabled={true}
                    />
                    {/* <Field
                        name="statusanalytics"
                        type="text"
                        component="input"
                        id="statusanalytics"
                        autoComplete="off"
                        disabled={true}
                    /> */}
                </tr>
                <tr>
                    <td> <label htmlFor="combineCeicroModelsOfall">combineCeicroModelsOfall:</label></td>
                    <Field
                        name="combineCeicroModelsOfall"
                        type="text"
                        component="input"
                        id="combineCeicroModelsOfall"
                        autoComplete="off"
                    />
                    <Field
                        name="lastRunDatecombineCeicroModelsOfall"
                        type="text"
                        component="input"
                        id="lastRunDatecombineCeicroModelsOfall"
                        autoComplete="off"
                        disabled={true}
                    />
                    {/* <Field
                        name="statuscombineCeicroModelsOfall"
                        type="text"
                        component="input"
                        id="statuscombineCeicroModelsOfall"
                        autoComplete="off"
                        disabled={true}
                    /> */}
                </tr>
                <tr>
                    <td> <label htmlFor="combineCeicroModelsOfall">UpdateReportStatus:</label></td>
                    <Field
                        name="UpdateReportStatus"
                        type="text"
                        component="input"
                        id="UpdateReportStatus"
                        autoComplete="off"
                    />
                    <Field
                        name="lastRunDateUpdateReportStatus"
                        type="text"
                        component="input"
                        id="lastRunDateUpdateReportStatus"
                        autoComplete="off"
                        disabled={true}
                    />
                    {/* <Field
                        name="statusUpdateReportStatus"
                        type="text"
                        component="input"
                        id="statusUpdateReportStatus"
                        autoComplete="off"
                        disabled={true}
                    /> */}
                </tr>
            </table>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ExecuteSPForm;