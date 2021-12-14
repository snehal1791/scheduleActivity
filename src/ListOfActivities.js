import { Component } from "react";
import ActivityForm from "./ActivityForm";
import EditableActivity from "./EditableActivity";

class ListOfActivities extends Component {
    state = {
        editFormOpen: false,
        activityToEdit: null,
        query: ''
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
    updateQuery = (query) => {
		this.setState(() => ({
			query: query.trim()
		}))
	}
	clearQuery = () => {
		this.updateQuery('')
	}
    render() {
        const activities = this.props.activities;
        const { query } = this.state;
        const showingActivity = query === ''
		? activities
		: activities.filter((activity) => (
			activity.activityName.toLowerCase().includes(query.toLowerCase())))
        const editableActivities = showingActivity.map((activity) => (
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
        const editActivityForm = showingActivity.filter((activity) => {
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
                    <div className='list-activities-top'>
                        <input 
                            className='search-activities'
                            type='text'
                            placeholder='Search Activity by Name'
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                        {query ? <span className='search-result'>Now showing activities {editableActivities.length} of {activities.length}</span> : ''}
                        
                    </div>
                    {editableActivities}
                </div>
            )
        }
    }
}

export default ListOfActivities;