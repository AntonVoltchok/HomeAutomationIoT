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
    this.setState({showEmptySlot: false, showButton: true, showWidget: false});
    this.hideOptions();
  };
  
  addSlider = () => {
    this.setState({showEmptySlot: false, showButton: false, showWidget: true});
    this.hideOptions();
  };
  
  resetSlot = () => {
    this.setState({showEmptySlot: true, showButton: false, showWidget: false});
    this.hideOptions();
  };
  
  getControlValue = (value) => {
    this.setState({currentValue: value});
  };
  
  
  render() {
    
    const {showEmptySlot, showButton, showSlider, showAddOptions} = this.state;
    
    
    const menu =
      <div style={{display: showAddOptions ? 'block' : 'none', position: 'absolute', top: 200, left: 0, border: '2px solid #eaeaea', padding: 10, borderRadius: 5, backgroundColor: '#444', color: '#fff'}}>
        {showEmptySlot ? <div>
          <div onClick={this.addButton}>New Button</div>
          <div>---</div>
          <div onClick={this.addSlider}>New Slider</div>
        </div> : <div onClick={this.resetSlot}>Reset Slot</div>}
      
      </div>;
    
    return (
      <div style={{position: 'relative'}}>
        {menu}
        <div onClick={this.showOptions} style={{border: '1px solid #999', padding: 5, borderRadius: 4, margin: 5, cursor: 'pointer'}}>
          {showEmptySlot ? <div>ADD</div> : false }
          {showButton ? <WidgetButton getControlValue={(value)=>this.getControlValue(value)}/> : false}
          {showSlider ? <WidgetSlider/> : false}
        </div>
      </div>
    );
  }
}
  