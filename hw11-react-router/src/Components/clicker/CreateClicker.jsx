import React from 'react';
import './CreateClicker.css';

class CreateClicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  plusClick = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }))
  }

  refreshClick = () => {
    this.setState({ counter: 0 })
  }

  minusClick = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }))
  }

  render() {
    return (
      <div className="component">
        <p className="counter">{this.state.counter}</p>
        <div className="buttons">
          <input type="button" onClick={this.plusClick} className="plusButton" value="+" />
          <input type="button" onClick={this.refreshClick} className="refreshButton" value="&#8634;" />
          <input type="button" onClick={this.minusClick} className="minusButton" value="-" />
        </div>
      </div>
    )
  }
}

export default CreateClicker;
