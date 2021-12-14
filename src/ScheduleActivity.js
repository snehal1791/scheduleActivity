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
          {this.props.activities.length ?
            <ListOfActivities 
              className='activity container'
              activities={this.props.activities}
              onDeleteActivity={this.props.onDeleteActivity}
              onFormSubmit={this.props.onFormSubmit} />
            :
            <div className='no-activities'>Schedule new activities by clicking on the "New Activity" button or navigate to "/createActivity"</div>
        }
        </main>
      </div>
    );
  }
}

export default ScheduleActivity;
