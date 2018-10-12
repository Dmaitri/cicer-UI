import React from 'react';
import * as config from '../json/config'
import Header from '../common/Header'

class ConfigEditPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { configArr: [], backState: '', globalArr: [], projectName: this.props.projectName };
        let Arr = [];
        config.configData.map(ele => {
            this.state.globalArr.push({ key: ele["projectName"], value: ele })
        })
        //this.setState({ globalArr: Arr });
        // console.log(this.state.globalArr);
    }
    componentWillReceiveProps(props) {
        this.setState({ projectName: props.projectName, backState: '' });
    }

    handleSubmit() {
        var stateCopy = Object.assign({}, this.state);
        this.setState(stateCopy)
    }

    createRow(arr) {
        return (
            <tr key={arr.key}>
                <td> {arr.key}</td>
                {arr.key == "projectName" ?
                    (<td><input type="text" name="title" defaultValue={arr.value} readOnly={true} /></td>) : (
                        <td><input type="text" name="title" defaultValue={arr.value} onBlur={(event) => this.onBlur(arr.key, event)} /></td>
                    )}
            </tr>
        );
    }

    onBlur(key, event) {
        let dataToRender;
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
        console.log(stateCopy.globalArr);
        // stateCopy.projectName = this.state.projectName;
        // stateCopy.backState = '';
        // this.state = stateCopy;
        // console.log(this.state);
        this.setState(stateCopy);
    }

    handleBackButton() {
        var stateCopy = Object.assign({}, this.state);
        stateCopy.backState = "true";
        stateCopy.projectName = this.state.projectName;
        stateCopy.configArr = this.state.configArr;
        this.setState(stateCopy);

        console.log(this.state);
    }

    render() {
        //let dataToRender = this.state.globalArr[this.props.projectName].value;
        let x = [];
        let dataToRender;
        this.state.globalArr.forEach(ele => {
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

export default ConfigEditPage;
