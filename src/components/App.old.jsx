import { Component } from "react";
import { Statistics } from './Statistics'
import { Section } from "./Section";
import { Notification } from "./Notification"; 
import { FeedbackOptions } from './FeedbackOptions.js'
import { BlockOfButtons } from "./BlockOfButtons";

class Button extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  LeaveFeedback = name => {
    this.setState(pervState => {
      return {
        [name]: pervState[name] + 1
      }
    })
  }


  render() {
    const totalState = this.state.good + this.state.neutral + this.state.bad;
    const percentOfGood = Math.round(this.state.good / totalState * 100)
    
    return (
      <div>
        <Section title='Please leave feedback'>
          <BlockOfButtons>
            <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.LeaveFeedback} />
            {/* <FeedbackOptions options={this} onLeaveFeedback={this.LeaveFeedback} /> */}
          </BlockOfButtons>
        </Section>
        
        <Section title='Statistics'>
          {this.state.good || this.state.neutral || this.state.bad ? 
            (<Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              otal={totalState}
              positivePercentage={percentOfGood} />) :
              <Notification message="There is no feedback" /> }
            </Section>
      </div>
    )
  }
}

export const App = () => {
  return (
    <div style={{padding: 25}}>
      <Button />
    </div>
  );
};

