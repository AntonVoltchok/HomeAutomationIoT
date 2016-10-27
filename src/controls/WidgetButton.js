import React, {Component} from 'react';

export default class Slot extends Component {
  
  constructor(props) {
    super(props);
    this.state = {isOn: true};
  }
  
  toggleButton = () => {
    this.setState({isOn: !this.state.isOn});
    let buttonValue = this.state.isOn ? 1 : 0;
    this.props.getControlValue(buttonValue);
  };
  
  render() {
    
    return (
      <div onClick={this.toggleButton}>
        <div style={{width: 50, height: 50, borderRadius: 500, backgroundColor: this.state.isOn ? 'green' : '#efefef', border: '1px solid #ddd'}}></div>
        <div>Button: {this.state.isOn ? 'On' : 'Off'}</div>
      </div>
    );
  }
}
  