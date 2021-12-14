import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import ScheduleActivity from './ScheduleActivity';
import CreateActivity from './CreateActivity';

class App extends Component {
  state= {
    activities: []
  }
  handleCreateActivity = (activityObj) => {
    this.createActivity(activityObj);
  }
  createActivity = (activityObj) => {
    console.log(activityObj)
    this.setState({
      activities: this.state.activities.concat(activityObj)
    })
  }
  onDeleteActivity = (activityId) => {
    this.setState((currentState) => ({
      activities: currentState.activities.filter((activity) => {
        return activity.id !== activityId
      })
    }))
  }
  handleFormSubmit = (activityObj) => {
    this.updateActivity(activityObj);
  }
  updateActivity = (activityObj) => {
    this.setState({
      activities: this.state.activities.map((activity) => {
        if(activity.id === activityObj.id) {
          return Object.assign({}, activity, {
            activityName: activityObj.activityName,
            date: activityObj.date,
            startTime: activityObj.startTime,
            endTime: activityObj.endTime,
            numMaxGuests: activityObj.numMaxGuests
          });
        } else {
          return activity;
        }
      })
    })
  }
  render(){
    return (
      <Routes>
        <Route path='/' element={
          <ScheduleActivity
            activities={this.state.activities}
            onDeleteActivity={this.onDeleteActivity}
            onFormSubmit={this.handleFormSubmit} />} />
        <Route path='/createActivity' element={
          <CreateActivity
            onFormSubmit={this.handleCreateActivity} />} />
      </Routes>
    );
  }
}

export default App;
