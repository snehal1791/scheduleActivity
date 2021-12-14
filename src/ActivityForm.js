import { Component } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

class ActivityForm extends Component {
    state = {
        id: this.props.id || uuidv4(),
        activityName: this.props.activityName || '',
        date: this.props.date || '',
        startTime: this.props.startTime || '',
        endTime: this.props.endTime || '',
        numMaxGuests: this.props.numMaxGuests || 0
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.props.onFormSubmit) {
            this.props.onFormSubmit({
                id: this.state.id,
                activityName: this.state.activityName,
                date: this.state.date,
                startTime: this.state.startTime,
                endTime: this.state.endTime,
                numMaxGuests: this.state.numMaxGuests
            })
        }
    }
    handleNameChange = (e) => {
        this.setState({ activityName: e.target.value })
    }
    handleDateChange = (e) => {
        this.setState({ date: e.target.value })
    }
    handleStartTimeChange = (e) => {
        this.setState({ startTime: e.target.value })
    }
    handleEndTimeChange = (e) => {
        this.setState({ endTime: e.target.value })
    }
    handleMaxGuestsChange = (e) => {
        this.setState({ numMaxGuests: e.target.value })
    }
    render() {
        const buttonText = this.props.id ? 'Update' : 'Create';
        return (
            <form 
                className='create-activity-form'
                onSubmit={this.handleSubmit}>
                <div className='field'>
                    <label className='activity-name-label'>Name: </label>
                    <input 
                        type='text' 
                        name='activity name' 
                        placeholder='Enter Name of the Acitivity' 
                        value={this.state.activityName} 
                        onChange={this.handleNameChange} />
                </div>
                <div className='field'>
                    <label className='activity-date-label'>Date: </label>
                    <input 
                        type='date' 
                        name='activity date' 
                        value={this.state.date}
                        onChange={this.handleDateChange} />
                </div>
                <div className='field'>
                    <label className='activity-start-time-label'>Start Time: </label>
                    <input 
                        type='time' 
                        name='activity start time' 
                        value={this.state.startTime}
                        onChange={this.handleStartTimeChange} />
                </div>
                <div className='field'>
                    <label className='activity-end-time-label'>End Time: </label>
                    <input 
                        type='time' 
                        name='activity end time' 
                        value={this.state.endTime}
                        onChange={this.handleEndTimeChange} />
                </div>
                <div className='field'>
                    <label className='activity-name-label'>Maximum Number of Guests: </label>
                    <input 
                        type='number' 
                        name='activity maximum number of guests' 
                        value={this.state.numMaxGuests}
                        onChange={this.handleMaxGuestsChange} />
                </div>
                <div className='buttons-segment'>
                    <button className='basic-button'>
                        {buttonText} Activity
                    </button>
                    {this.props.id ? 
                        <button className='basic-button' onClick={this.props.onFormClose}>
                            Cancel
                        </button>
                    :
                        <Link
                            to='/'
                            className='cancel-activity'
                            role='button' >
                                Cancel
                        </Link>}        
                </div>
            </form>
        )
    }
}

export default ActivityForm;