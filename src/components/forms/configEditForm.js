import React from 'react'
import {  Field } from 'redux-form';

const ConfigEditForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <table>
                <tr>
                    <td> <label htmlFor="Projectname">Projectname:</label></td>
                    <Field
                        name="Projectname"
                        type="text"
                        component="input"
                        id="Projectname"

                    />
                </tr>
                <tr>
                    <td> <label htmlFor="anamolyLOCCountPerCommit">anamolyLOCCountPerCommit:</label></td>
                    <Field
                        name="anamolyLOCCountPerCommit"
                        type="number"
                        component="input"
                        id="anamolyLOCCountPerCommit"
                    />
                </tr>
                <tr>
                    <td> <label htmlFor="anamolyLOCCount">anamolyLOCCount:</label></td>
                    <Field
                        name="anamolyLOCCount"
                        type="number"
                        component="input"
                        id="anamolyLOCCount"
                    />
                </tr>
                <tr>
                    <td> <label htmlFor="ciceroServerPort">ciceroServerPort:</label></td>
                    <Field
                        name="ciceroServerPort"
                        type="number"
                        component="input"
                        id="ciceroServerPort"
                    />
                </tr>
                <tr>
                    <td> <label htmlFor="ciceroServerHost">ciceroServerHost:</label></td>
                    <Field
                        name="ciceroServerHost"
                        type="text"
                        component="input"
                        id="ciceroServerHost"
                    />
                </tr>
                <tr>
                    <td> <label htmlFor="cleanuprepos">cleanuprepos:</label></td>
                    <Field
                        name="cleanuprepos"
                        type="text"
                        component="input"
                        id="cleanuprepos"
                    />
                </tr>
                <tr>
                    <td> <label htmlFor="repospath">repospath:</label></td>
                    <Field
                        name="repospath"
                        type="text"
                        component="input"
                        id="repospath"
                    />
                </tr>
                <tr>
                    <td> <label htmlFor="sonarCommand">sonarCommand:</label></td>
                    <Field
                        name="sonarCommand"
                        type="text"
                        component="input"
                        id="sonarCommand"
                    />
                </tr>
                <tr>
                    <td> <label htmlFor="sonarCommandWithoutType">sonarCommandWithoutType:</label></td>
                    <Field
                        name="sonarCommandWithoutType"
                        type="text"
                        component="input"
                        id="sonarCommandWithoutType"
                    />
                </tr>
                <tr>
                    <td> <label htmlFor="exCludeFiles">exCludeFiles:</label></td>
                    <Field
                        name="exCludeFiles"
                        type="text"
                        component="input"
                        id="exCludeFiles"
                    />
                </tr>
            </table>
            <button type="submit">Submit</button>
        </form>
    );
};



export default ConfigEditForm;