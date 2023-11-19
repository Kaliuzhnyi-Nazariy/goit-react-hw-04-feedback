import { useState } from "react";
import { Statistics } from './Statistics'
import { Section } from "./Section";
import { Notification } from "./Notification"; 
import { FeedbackOptions } from './FeedbackOptions.js'
import { BlockOfButtons } from "./BlockOfButtons";


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    switch (e) {
      case 'good':
        setGood(good + 1)
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1)
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1)
        break;
      
      default:
        return;
    }
  }
  
  const totalVotes = good + bad + neutral;
  const percentOfGood = Math.round(good / totalVotes * 100)

  return (
    <div style={{padding: 25}}>
<Section title='Please leave feedback'>
          <BlockOfButtons>
            <FeedbackOptions options={{good, neutral, bad}} onLeaveFeedback={handleClick} />
          </BlockOfButtons>
        </Section>
        
        <Section title='Statistics'>
          {good || neutral || bad ? 
            (<Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalVotes}
            positivePercentage={percentOfGood}
          />):
              <Notification message="There is no feedback" /> } 
            </Section>
    </div>
  );
};

