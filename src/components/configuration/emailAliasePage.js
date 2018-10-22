import React from 'react';
import { x } from '../json/emailAliases';
import Header from '../common/Header'
import { connect } from 'react-redux';
import { getConfigDataForProject } from '../../actions';

export class EmailAliasesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: x, typed: '', backState: '' };
    }

    onBlur(event) {
        this.setState({ address: x, typed: event.target.value })
    }
    componentWillMount() {
        this.props.getConfigDataForProject("emailalias");
    }
    createRow(address) {
        if (address.key != "_links" && address.key != "id" && address.key != "projectname") {
            return (
                <tr key={address.key}>
                    <td> {address.value}</td>
                    <td><input id="x" type="text" name="title" value={address.value} onBlur={this.onBlur.bind(this)} /></td>
                    <td><a href="emailAliases.jsonedit">Edit</a></td>
                    {/* <td onClick={() => this.handleClick(address.email, this.state.typed)}>Edit</td> */}
                </tr>
            );
        }
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
        let x = [];
        this.props.configData.map(element => {
            for (var i = 0; i < element.length; i++) {
                var y = element[i];
                if (y["projectname"] == this.props.selectedProject) {
                    Object.keys(y).forEach(element => {
                        x.push({ key: element, value: y[element] })
                    })
                }
            }
            Object.keys(element).forEach(ele => {
            })
        });
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
                        {x.map(this.createRow, this)}
                        <tr>
                            <input type="button" value="Back" onClick={() => this.handleBackButton(this)} />
                        </tr>
                    </tbody>
                </table>
            </form>
        );
    }
}
function mapStateToProps(state) {
    return {
        selectedProject: state.selectedProject,
        configData: state.configData
    };
}

const mapActionsToDispatch = (dispatch) => ({
    getConfigDataForProject: (filename) => { return dispatch(getConfigDataForProject(filename)) },
});

export default connect(mapStateToProps, mapActionsToDispatch)(EmailAliasesPage);
