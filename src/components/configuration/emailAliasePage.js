import React from 'react';
import { connect } from 'react-redux';
import { getConfigDataForProject } from '../../actions';
import { Field } from 'redux-form';


export class EmailAliasesPage extends React.Component {
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

    render() {
        let x = [];
        // this.props.configData.map(element => {
        let element = this.props.configData;
        for (var i = 0; i < element.length; i++) {
            var y = element[i];
            if (y["projectname"] == this.props.selectedProject) {
                Object.keys(y).forEach(element => {
                    if (element != "projectname") {
                        x.push({ key: element, value: y[element] })
                    }
                })
            }
        }


        return (
            <form>
                <table>
                    <label htmlFor="projectname">projectname</label>
                    <Field
                        name="projectname"
                        type="text"
                        component="input"
                        id="projectname"
                    />
                    {
                        x.map(ele => {
                            let emailId = `${ele.key}`, aliasId = `${ele.value}`
                            return (
                                <tr>
                                    <label htmlFor={emailId}>Email</label>
                                    <input
                                        type="text"
                                        name={emailId}
                                        id={emailId}
                                        className="name"
                                    />
                                    <label htmlFor={aliasId}>Alias</label>
                                    <input
                                        type="text"
                                        name={aliasId}
                                        id={aliasId}
                                        className="age"
                                    />
                                </tr>
                            )
                        })
                    }
                    <input type="submit" value="Submit" />
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
