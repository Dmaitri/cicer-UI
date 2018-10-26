import React from 'react'
import { Field } from 'redux-form';

const EmailAliasesEditForm = ({ handleSubmit, fields }) => {

    return (
        <form onSubmit={handleSubmit}>
            {fields.map(field => (
                <table>
                    <tr>
                        <td> <label htmlFor={field.key1}>Email:</label></td>
                        <Field
                            name={field.key1}
                            type="text"
                            component="input"
                            id={field.key1}
                            disabled="true"
                        />
                        <td> <label htmlFor={field.key2}>Alias:</label></td>
                        <Field
                            name={field.key2}
                            type="text"
                            component="input"
                            id={field.key2}
                        />
                    </tr>
                </table>
            ))
            }
            <button type="submit">Save</button>
        </form>
    );
};

export default EmailAliasesEditForm;