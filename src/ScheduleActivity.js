import { Link } from 'react-router-dom';
import ListOfActivities from './ListOfActivities';
import { Component } from 'react';

class ScheduleActivity extends Component {
  render(){
    return (
      <div className='App'>
        <header className='App-header'>
          <div className='left-container'>
            <h1 className='header-title main-header'>Schedule Activities</h1>
          </div>
          <div className='right-container'>
            <Link to='/createActivity' className='create-activity-link'> 
              New Activity
            </Link>
          </div>
        </header>
        <main className='App-main'>
          <ListOfActivities 
            className='activity container'
            activities={this.props.activities}
            onDeleteActivity={this.props.onDeleteActivity}
            onFormSubmit={this.props.onFormSubmit} />
        </main>
      </div>
    );
  }
}

export default ScheduleActivity;
