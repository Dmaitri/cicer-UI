import React from 'react'
import { Field } from 'redux-form';

const ProcessStatusEditForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <table>
                <tr>
                    <td> <label htmlFor="projectname">Projectname:</label></td>
                    <Field
                        name="projectname"
                        type="text"
                        component="input"
                        id="projectname"

                    />
                </tr>
                <tr>
                    <td> <label htmlFor="checkEnvironment">checkEnvironment:</label></td>
                    <Field
                        name="checkEnvironment"
                        type="text"
                        component="input"
                        id="checkEnvironment"
                    />
                </tr>
                <tr>
                    <td> <label htmlFor="main">main:</label></td>
                    <Field
                        name="main"
                        type="text"
                        component="input"
                        id="main"
                    />
                </tr>
                <tr>
                    <td> <label htmlFor="mainGitAnalysis">mainGitAnalysis:</label></td>
                    <Field
                        name="mainGitAnalysis"
                        type="text"
                        component="input"
                        id="mainGitAnalysis"
                    />
                </tr>
                <tr>
                    <td> <label htmlFor="prepareConfigurationList">prepareConfigurationList:</label></td>
                    <Field
                        name="prepareConfigurationList"
                        type="text"
                        component="input"
                        id="prepareConfigurationList"
                    />
                </tr>
                <tr>
                    <td> <label htmlFor="mainCiceroAnalysis">mainCiceroAnalysis:</label></td>
                    <Field
                        name="mainCiceroAnalysis"
                        type="text"
                        component="input"
                        id="mainCiceroAnalysis"
                    />
                </tr>
                <tr>
                    <td> <label htmlFor="mainSonarAnalysis">mainSonarAnalysis:</label></td>
                    <Field
                        name="mainSonarAnalysis"
                        type="text"
                        component="input"
                        id="mainSonarAnalysis"
                    />
                </tr>
                <tr>
                    <td> <label htmlFor="sonarAnalysis">sonarAnalysis:</label></td>
                    <Field
                        name="sonarAnalysis"
                        type="text"
                        component="input"
                        id="sonarAnalysis"
                    />
                </tr>
                <tr>
                    <td> <label htmlFor="productivityjob">productivityjob:</label></td>
                    <Field
                        name="productivityjob"
                        type="text"
                        component="input"
                        id="productivityjob"
                    />
                </tr>
                <tr>
                    <td> <label htmlFor="sonarETL">sonarETL:</label></td>
                    <Field
                        name="sonarETL"
                        type="text"
                        component="input"
                        id="sonarETL"
                    />
                </tr>
                <tr>
                    <td> <label htmlFor="analytics">analytics:</label></td>
                    <Field
                        name="analytics"
                        type="text"
                        component="input"
                        id="analytics"
                    />
                </tr>
                <tr>
                    <td> <label htmlFor="prepareMainStatus">prepareMainStatus:</label></td>
                    <Field
                        name="prepareMainStatus"
                        type="text"
                        component="input"
                        id="prepareMainStatus"
                    />
                </tr>
                <tr>
                    <td> <label htmlFor="combineCeicroModelsOfall">combineCeicroModelsOfall:</label></td>
                    <Field
                        name="combineCeicroModelsOfall"
                        type="text"
                        component="input"
                        id="combineCeicroModelsOfall"
                    />
                </tr>
            </table>
            <button type="submit"  >Submit</button>
        </form>
    );
};



export default ProcessStatusEditForm;