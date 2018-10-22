import React from 'react';
import Header from '../common/Header'
import { connect } from 'react-redux';
import { getConfigDataForProject } from '../../actions';

export class ConfigEditPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { configArr: [], backState: '', globalArr: [], projectName: this.props.projectName };
    }
    // componentWillReceiveProps(props) {
    //     this.setState({ projectName: props.projectName, backState: '' });
    // }

    handleSubmit() {
        var stateCopy = Object.assign({}, this.state);
        this.setState(stateCopy)
    }

    componentWillMount() {
        this.props.getConfigDataForProject("config");
    }

    createRow(arr) {
        if (arr.key != "_links") {
            return (
                <tr key={arr.key}>
                    <td> {arr.key}</td>
                    {arr.key == "Projectname" ?
                        (<td><input type="text" name="title" value={arr.value} readOnly={true} /></td>) : (
                            <td><input type="text" name="title" value={arr.value} onBlur={(event) => this.onBlur(arr.key, event)} /></td>
                        )}
                </tr>
            );
        }
    }

    onBlur(key, event) {
        var stateCopy = Object.assign({}, this.state);
        stateCopy.globalArr.map(function (ele) {
            if (ele.key == stateCopy.projectName) {
                //dataToRender = ele.value;
                Object.keys(ele.value).forEach(element => {
                    if (element == key) {
                        ele.value[element] = event.target.value;
                    }
                })
            }
        });
        this.setState(stateCopy);
    }

    // handleBackButton() {
    //     var stateCopy = Object.assign({}, this.state);
    //     stateCopy.backState = "true";
    //     stateCopy.projectName = this.state.projectName;
    //     stateCopy.configArr = this.state.configArr;
    //     this.setState(stateCopy);

    //     console.log(this.state);
    // }

    render() {
        let x = [];
        this.props.configData.map(element => {
            for (var i = 0; i < element.length; i++) {
                var y = element[i];
                if (y["Projectname"] == this.props.selectedProject) {
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
                <Header projectName={this.props.selectedProject} backState={this.state.backState}></Header>
            );
        }
        return (
            <form>
                <table>
                    {x.map(this.createRow, this)}
                </table>
                <tr>
                    <input type="button" value="Submit" onClick={() => this.handleSubmit(this)} />
                    {/* <input type="button" value="Back" onClick={() => this.handleBackButton(this)} /> */}
                </tr>
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

export default connect(mapStateToProps, mapActionsToDispatch)(ConfigEditPage);
