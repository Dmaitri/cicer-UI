import React from 'react'
import { Field } from 'redux-form';

const CreateNewProjectForm = ({ handleSubmit }) => {
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
                        placeholder="Enter Project name here"
                        autoComplete="off"
                    />
                </tr>
            </table>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CreateNewProjectForm;