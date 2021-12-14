import { Component } from "react";
import moment from "moment";
import Moment from "react-moment";

class EditableActivity extends Component {
    handleDelete = () => {
        this.props.onDeleteActivity(this.props.id)
    }
    handleFormEdit = () => {
        this.props.openForm(this.props.id);
    }
    render() {
        const activity = this.props;
        const startTimetext = moment(activity.startTime, 'HH:mm').format('h:mm a');
        const endTimetext = moment(activity.endTime, 'HH:mm').format('h:mm a');        
        return (
            <div className='content col'>
                <div className='activities-content'>
                    <h2 className='activity-name'>{this.props.activityName}</h2>
                    <div className='activity-info'>
                            <Moment format='dddd, MMMM D, Y'>
                                {activity.date}
                            </Moment>
                    </div>
                    <div className='activity-time'>
                        {startTimetext} - {endTimetext}
                    </div>
                    <div className='activity-guests'>
                        <span className='guest-icon'></span>
                        {this.props.numMaxGuests}
                    </div>
                    
                    {/* <div className='activity-date'>{activity.date}</div>
                    <div className='activity-start-time'>{activity.startTime}</div>
                    <div className='activity-end-time'>{activity.endTime}</div> */}
                </div>
                <div className="extra-content">
                    <button 
                        className="extra-content-buttons edit-icon"
                        onClick={this.handleFormEdit}>
                    </button>
                    <button 
                        className="extra-content-buttons trash-icon"
                        onClick={this.handleDelete}>
                    </button>
                </div>
            </div>
        )
    }
}

export default EditableActivity;