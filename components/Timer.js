import React, { Component } from 'react';
import { Lcd } from 'react-blessed-contrib';
import screen from '../screen';

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      time: 59,
    };
  }

  componentDidMount() {
    console.log(this.state.time, ' equals 0');
    const lcd = this.refs.lcdRef.widget;
    this.timer = setInterval(() => {
      if (this.state.time > 0) {
        this.setState(prevState => ({ time: prevState.time - 1 }));
      }
      lcd.setDisplay(this.state.time);
      screen.render();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <box top="center" left="center" width="100%" height="100%">
        <Lcd
          ref="lcdRef"
          segmentWidth={0.06}
          segmentInterval={0.11}
          strokeWidth={0.1}
          elements={5}
          color="cyan"
          display={this.state.time}
          elementSpacing={4}
          elementPadding={4}
        />
      </box>
    );
  }
}

export default Timer;
