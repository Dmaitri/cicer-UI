import React from 'react'
import { Field } from 'redux-form';

const RepoTypeEditForm = ({ handleSubmit, fields }) => {
    return (
        <form onSubmit={handleSubmit}>
            {fields.map(field => (
                <table>
                    <tr>
                        <td> <label>reponame:</label></td>
                        <Field
                            name={field.key1}
                            type="text"
                            component="input"
                            id={field.key1}
                        />

                        <td> <label>repotype:</label></td>
                        <Field
                            name={field.key2}
                            type="text"
                            component="input"
                            id={field.key2}
                        />
                    </tr>
                </table>
            ))}
            <button type="submit"  >Submit</button>
        </form>
    );
};

export default RepoTypeEditForm;