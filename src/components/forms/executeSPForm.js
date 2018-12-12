import React from 'react'
import { Field } from 'redux-form';

const ExecuteSPForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <table>
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
                </tr>
            </table>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ExecuteSPForm;