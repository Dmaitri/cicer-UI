import React from 'react'
import { Field } from 'redux-form';

const EmailAliasesEditForm = ({ handleSubmit }) => {
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
                    <td> <label htmlFor="email">email:</label></td>
                    <Field
                        name="reponame"
                        type="text"
                        component="input"
                        id="reponame"
                    />
                </tr>
                <tr>
                    <td> <label htmlFor="repotype">repotype:</label></td>
                    <Field
                        name="repotype"
                        type="text"
                        component="input"
                        id="repotype"
                    />
                </tr>
            </table>
            <button type="submit"  >Submit</button>
        </form>
    );
};

export default EmailAliasesEditForm;