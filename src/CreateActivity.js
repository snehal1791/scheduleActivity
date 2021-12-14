import { Component } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import ActivityForm from "./ActivityForm";

class CreateActivity extends Component {
    state = { 
        redirectTo: false 
    };
    handleSubmit = (activityObj) => {
        this.props.onFormSubmit(activityObj)
        this.setState({ redirectTo: true})
    }
    render() {
        if (this.state.redirectTo) {
            return (
                <Routes>
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
            )
          } else{
            return (
                <div className='create-activity'>
                    <header className="App-header">
                        <Link
                            to='/'
                            className='close-create-activity'>
                                Close
                        </Link>
                        <div className="container">
                            <h1 className="header-title">Activity Details</h1>
                        </div>
                    </header>
                    <main className='create-activity-main'>
                        <ActivityForm 
                            onFormSubmit={this.handleSubmit}
                            />
                    </main>
                </div>
            )
          }

    }
}

export default CreateActivity;