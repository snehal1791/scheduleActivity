import { Component } from "react";
import ActivityForm from "./ActivityForm";
import EditableActivity from "./EditableActivity";

class ListOfActivities extends Component {
    state = {
        editFormOpen: false,
        activityToEdit: null
    }
    handleFormEdit = (activityId) => {
        this.setState({
            editFormOpen: true,
            activityToEdit: activityId
        })
    }
    handleFormClose = () => {
        this.setState({ editFormOpen: false })
    }
    handleFormSubmit = (activityObj) => {
        this.props.onFormSubmit(activityObj);
        this.handleFormClose();
    }
    render() {
        const editableActivities = this.props.activities.map((activity) => (
            <EditableActivity
                key={activity.id}
                id={activity.id}
                activityName={activity.activityName}
                date={activity.date}
                startTime={activity.startTime}
                endTime={activity.endTime}
                numMaxGuests={activity.numMaxGuests}
                onDeleteActivity={this.props.onDeleteActivity}
                openForm={this.handleFormEdit} />
        ))
        const editActivityForm = this.props.activities.filter((activity) => {
            return activity.id === this.state.activityToEdit
        });
        if(this.state.editFormOpen) {
            return (
                <div className="edit-activity-main">
                    <ActivityForm
                        id={this.state.activityToEdit}
                        activityName={editActivityForm[0].activityName}
                        date={editActivityForm[0].date}
                        startTime={editActivityForm[0].startTime}
                        endTime={editActivityForm[0].endTime}
                        numMaxGuests={editActivityForm[0].numMaxGuests}
                        onFormSubmit={this.handleFormSubmit}
                        onFormClose={this.handleFormClose} />
                </div>
            )
        } else {
            return (
                <div className='list-of-activities row'>
                    {editableActivities}
                </div>
            )
        }
    }
}

export default ListOfActivities;