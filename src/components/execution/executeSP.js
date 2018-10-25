import React from 'react';
import ExecuteSPForm from '../forms/executeSPForm';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { executeSP } from '../../actions';

export class ExecuteSP extends React.Component {
    submit=(values)=> {
        this.props.executeSP(values)
            .then(res => {
                document.getElementById("tag").innerHTML = "success!!!"
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <Executespform onSubmit={this.submit}></Executespform>
                <h4 id="tag"></h4>
            </div>
        );
    }
}

let Executespform = reduxForm({
    form: 'executespform',
    enableReinitialize: true,
})(ExecuteSPForm);

function mapStateToProps(state) {
    return {
    };
}

const mapActionsToDispatch = (dispatch) => ({
    executeSP: (data) => dispatch(executeSP(data)),
});

export default connect(mapStateToProps, mapActionsToDispatch)(ExecuteSP);

