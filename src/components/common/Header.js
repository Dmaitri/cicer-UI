import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <IndexLink to="/" activeClassName="active">Configuration</IndexLink>
                    {" | "}
                    <Link to="/execution" activeClassName="active">Execution</Link>
                </nav>
            </div >
        );
    }
};
