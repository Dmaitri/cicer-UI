import React from 'react';
import { Link } from 'react-router';

class ExecutionPage extends React.Component {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th><h2>Execution</h2></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Link to="/createnewproject" activeClassName="active">Create new Project</Link></td>
                    </tr>
                    <tr>
                        <td><Link to="/ExecuteSP" activeClassName="active">Execute SP</Link></td>
                    </tr>
                    <tr>
                        <td><Link to="/associateproject" activeClassName="active">Associate User to project</Link></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default ExecutionPage;