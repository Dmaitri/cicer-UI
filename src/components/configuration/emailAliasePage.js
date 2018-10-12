import React from 'react';
import { x } from '../json/emailAliases';
import Header from '../common/Header'
import * as fs from 'fs';

class EmailAliasesPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(x);
        this.state = { address: x, typed: '' ,backState:''};
        // this.state={typed:''}
    }
    
    readFile() {
        let x = fs.readFile("E:\\abc.txt");
        console.log(x);
    }
    onBlur(event) {
        this.setState({ address: x, typed: event.target.value })
    }

    createRow(address) {

        return (
            <tr key={address.email}>
                <td> {address.email}</td>
                <td><input id="x" type="text" name="title" defaultValue={address.alias} onBlur={this.onBlur.bind(this)} /></td>
                <td onClick={() => this.handleClick(address.email, this.state.typed)}>Edit</td>
            </tr>
        );
    }
   
    handleBackButton() {
        var stateCopy = Object.assign({}, this.state);
        stateCopy.backState = "true";
        stateCopy.projectName = this.state.projectName;
        stateCopy.repoArr = this.state.repoArr;
        this.setState(stateCopy);
    }
    handleClick(email, alias) {
        var stateCopy = Object.assign({}, this.state);
        let arr = stateCopy.address;
        stateCopy.address.map(function (y) {
            if (y.email == email) {
                y.alias = alias;
            }
        });
        this.setState(stateCopy);
    }

    render() {
        if (this.state.backState != "") {
            return (
                <Header projectName={this.state.projectName} backState={this.state.backState}></Header>
            );
        }

        return (
            <form>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Aliases</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.address.map(this.createRow, this)}
                        <tr>
                    <input type="button" value="Back" onClick={() => this.handleBackButton(this)} />
                </tr>
                    </tbody>
                </table>
            </form>
        );
    }
}

export default EmailAliasesPage;