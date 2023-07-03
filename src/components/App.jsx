import { useState } from "react";
import { Feedback } from "./Feedback/Feedback";
import { Section } from "./Feedback/Section";
import { Statistics } from "./Feedback/Statistics/Statistics";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./Layout";

export const App = () => {
  const [state, setState] = useState ({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const leaveFeedback = options => {
    setState(prevState => {
      return {
        ...prevState,
        [options]: prevState[options] + 1,
      };
    });
  };

    const { good, neutral, bad } = state;
    const total = good + neutral + bad;

    const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    return total ? Number((good * 100) / total).toFixed(0) : '';
  };

    return (
      <Container>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <Feedback onLeaveFeedback={leaveFeedback} />
        </Section>

        <Section title="Statistics">
          <Statistics
            total={total}
            percentage={countPositiveFeedbackPercentage()}
            good={good}
            neutral={neutral}
            bad={bad}
          />
        </Section>
      </Container>
    );
  };

export default App;