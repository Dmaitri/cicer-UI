import React from 'react'
import { Field } from 'redux-form';

const EmailAliasesEditForm = ({ handleSubmit, fields }) => {
    let i = 0;
    return (
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    {fields.map(field => (
                        <tr key={++i}>
                            <td key={++i}> <label key={++i} htmlFor={field.key1}>Email:</label>
                                <Field
                                    name={field.key1}
                                    type="text"
                                    component="input"
                                    // id={field.key1}
                                    disabled={true}
                                    key={field.key1}
                                    autoComplete="off"
                                />
                            </td>
                            <td key={++i}> <label  key={++i} htmlFor={field.key2}>Alias:</label>
                                <Field
                                    name={field.key2}
                                    type="text"
                                    component="input"
                                    // id={field.key2}
                                    key={field.key2}
                                    autoComplete="off"
                                />
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

            <button type="submit">Save</button>
        </form>
    );
};

export default EmailAliasesEditForm;