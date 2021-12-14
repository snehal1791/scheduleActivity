import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import ScheduleActivity from './ScheduleActivity';
import CreateActivity from './CreateActivity';

class App extends Component {
  state= {
    activities: [
      {
        id: 1,
        activityName: 'Walking Tour',
        date: '2021-10-10',
        startTime: '11:00',
        endTime: '13:00',
        numMaxGuests: 10
      },
      {
        id: 2,
        activityName: 'Walking Tour',
        date: '2021-10-10',
        startTime: '11:00',
        endTime: '13:00',
        numMaxGuests: 10
      },
      {
        id: 3,
        activityName: 'Walking Tour',
        date: '2021-10-10',
        startTime: '11:00',
        endTime: '13:00',
        numMaxGuests: 10
      },
      {
        id: 4,
        activityName: '4 Tour',
        date: '2021-10-10',
        startTime: '11:00',
        endTime: '13:00',
        numMaxGuests: 10
      },
      {
        id: 5,
        activityName: '5 Tour',
        date: '2021-10-10',
        startTime: '11:00',
        endTime: '13:00',
        numMaxGuests: 10
      }
    ]
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
