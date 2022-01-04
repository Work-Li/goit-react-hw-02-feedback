import './App.css';
import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
// import Section from './Section/Section';
// import Notification from './Notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = feedbackName => {
    this.setState(prevState => {
      return {
        [feedbackName]: prevState[feedbackName] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? Math.round((this.state.good / total) * 100) : 0;
  };

  render() {
    const keysOfState = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <div className="feedback">
        <h1>Please leave feedback</h1>
        <FeedbackOptions options={keysOfState} onLeaveFeedback={this.onLeaveFeedback} />
        {/* <Section title="Please leave feedback">
                      <FeedbackOptions options={keysOfState} onLeaveFeedback={this.onLeaveFeedback}/>
                  </Section> */}
        {total > 0 ? (
          <Statistics options={this.state} total={total} positivePercentage={positiveFeedback} />
        ) : (
          'There is no feedback'
          // <Notification message="There is no feedback"  />
        )}

        {/* <Section title="Statistics">
                      {total > 0 ? (
                          <Statistics 
                          good={this.state.good} 
                          neutral={this.state.neutral} 
                          bad={this.state.bad} 
                          total={this.countTotalFeedback}  
                          positivePercentage={positiveFeedback}/>) : (<Notification message="There is no feedback"/>)
                      }
                  </Section>
               */}
      </div>
    );
  }
}

export default App;
