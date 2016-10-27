import React, {Component} from 'react';
import WidgetSlider from './WidgetSlider';
import WidgetButton from './WidgetButton';

export default class Slot extends Component {
  
  constructor(props) {
    super(props);
    this.state = {currentValue: 0, showAddOptions: false, showEmptySlot: true, showSlider: false, showButton: false};
  }
  
  showOptions = () => {
    this.setState({showAddOptions: true});
  };
  
  hideOptions = () => {
    this.setState({showAddOptions: false});
  };
  
  addButton = () => {
    this.setState({showEmptySlot: false, showButton: true, showSlider: false, currentValue: 1});
    this.hideOptions();
  };
  
  addSlider = () => {
    this.setState({showEmptySlot: false, showButton: false, showSlider: true});
    this.hideOptions();
  };
  
  resetSlot = () => {
    this.setState({showEmptySlot: true, showButton: false, showSlider: false});
    this.hideOptions();
  };
  
  getControlValue = (value) => {
    this.setState({currentValue: value});
  };
  
  
  render() {
    
    const {showEmptySlot, showButton, showSlider, showAddOptions} = this.state;
    
    const menuStyles = {
      display: showAddOptions ? 'block' : 'none',
      fontSize: '.75rem',
      position: 'absolute',
      zIndex: 1000,
      top: -25,
      left: -25,
      border: '2px solid #eaeaea',
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#444',
      color: '#fff'
    };
    
    const menu =
      <div style={menuStyles}>
        <div>
          <div onClick={this.addButton}>New Button</div>
          <div>---</div>
          <div onClick={this.addSlider}>New Slider</div>
        </div>
      </div>;
    
    return (
      <div style={{position: 'relative', padding:5, boxShadow:'0 1px 4px #aaa', borderRadius:8, margin: 5}}>
        <div style={{fontSize:'.75rem'}}>Slot Value: {this.state.currentValue}</div>
        {showEmptySlot ? menu : false}
        <div onClick={this.showOptions} style={{border: '1px solid #999', padding: 5, borderRadius: 4, margin: 5, cursor: 'pointer'}}>
          {showEmptySlot ? <div>ADD</div> : false}
          {showButton ? <WidgetButton getControlValue={(value)=>this.getControlValue(value)}/> : false }
          {showSlider ? <WidgetSlider getControlValue={(value)=>this.getControlValue(value)}/> : false }
        </div>
        {!showEmptySlot ? <div onClick={this.resetSlot}>Reset Slot</div> : false}
      </div>
    );
  }
}
  