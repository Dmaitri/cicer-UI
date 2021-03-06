import React from 'react';
import CreateNewProjectForm from '../forms/createNewProjectForm';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getProjects,createNewProject } from '../../actions/apiAction';

export class CreateNewProject extends React.Component {
    submit=(values)=> {
        document.getElementById("tag").innerHTML = "Processing.."
        this.props.createNewProject(values)
            .then(res => {
                if (document.getElementById("tag")) {
                    document.getElementById("tag").innerHTML = "success!!!"
                }
                this.props.testAction();
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <CreatenewprojectForm onSubmit={this.submit}></CreatenewprojectForm>
                <h4 id="tag"></h4>
            </div>
        );
    }
}

let CreatenewprojectForm = reduxForm({
    form: 'createnewprojectForm',
    enableReinitialize: true,
})(CreateNewProjectForm);

function mapStateToProps(state) {
    return {
      projects: state.projects,
    };
  }

const mapActionsToDispatch = (dispatch) => ({
    createNewProject: (data) => { return dispatch(createNewProject(data)) },
    testAction: () => dispatch(getProjects()),
});

export default connect(mapStateToProps, mapActionsToDispatch)(CreateNewProject);

