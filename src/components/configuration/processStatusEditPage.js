import React from 'react';
import * as  data from '../json/processStatus';
import Header from '../common/Header'


class ProcessStatusEditPage extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.state);
        this.state = { statusArr: [], backState: '', globalRepoArr: [], projectName: this.props.projectName };
        data.processData.map(ele => {
            this.state.globalRepoArr.push({ key: ele["projectName"], value: ele })
        });
    }

    handleSubmit() {
        var stateCopy = Object.assign({}, this.state);
        this.setState(stateCopy)
    }

    handleBackButton() {
        this.setState({ backState: "true" });
    }

    createRow(arr) {
        return (
            <tr key={arr.key}>
                <td> {arr.key}</td>
                <td><input type="text" name="title" defaultValue={arr.value} onBlur={(event) => this.onBlur(arr.key, event)} /></td>
            </tr>
        );
    }
    onBlur(key, event) {
        var stateCopy = Object.assign({}, this.state);
        stateCopy.globalRepoArr.map(function (ele) {
            if (ele.key == stateCopy.projectName) {
                //dataToRender = ele.value;
                Object.keys(ele.value).forEach(element => {
                    if (element == key) {
                        ele.value[element] = event.target.value;
                    }
                })
            }
        });
        console.log(stateCopy.globalRepoArr);
        // stateCopy.projectName = this.state.projectName;
        // stateCopy.backState = '';
        // this.state = stateCopy;
        // console.log(this.state);
        this.setState(stateCopy);
    }

    componentWillReceiveProps(props) {
        this.setState({ projectName: props.projectName, backState: '' });
    }

    handleSubmit() {
        var stateCopy = Object.assign({}, this.state);
        this.setState(stateCopy)
    }

    render() {
        let x = [];
        let dataToRender;
        this.state.globalRepoArr.forEach(ele => {
            if (ele.key == this.props.projectName) {
                dataToRender = ele.value
            }
        })
        Object.keys(dataToRender).forEach(element => {
            x.push({ key: element, value: dataToRender[element] })
        })

        if (this.state.backState != "") {
            return (
                <Header projectName={this.state.projectName} backState={this.state.backState}></Header>
            );
        }

        return (
            <form>
                <table>
                    {x.map(this.createRow, this)}
                </table>
                <tr>
                    <input type="button" value="Submit" onClick={() => this.handleSubmit(this)} />
                    <input type="button" value="Back" onClick={() => this.handleBackButton(this)} />
                </tr>
            </form>
        );
    }
}

export default ProcessStatusEditPage;