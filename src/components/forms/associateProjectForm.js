import React from 'react'
import { Field } from 'redux-form';

const AssociateProjectForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <table>
                {/* <tr>
                    <td> <label htmlFor="Projectname">Projectname:</label></td>
                    <Field
                        name="Projectname"
                        type="text"
                        component="input"
                        id="Projectname"
                        placeholder="Enter Project name here"
                        autoComplete="off"
                    />
                   
                </tr> */}
                <tr>
                    <td> <label htmlFor="Username">Username:</label></td>
                <Field
                        name="User"
                        type="text"
                        component="input"
                        id="Username"
                        placeholder="Enter user name here"
                        autoComplete="off"
                    />
                    </tr>
            </table>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AssociateProjectForm;