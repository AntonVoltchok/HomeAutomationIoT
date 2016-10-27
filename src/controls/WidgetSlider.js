import React, {Component} from 'react';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/**
 * The slider bar can have a set minimum and maximum, and the value can be
 * obtained through the value parameter fired on an onChange event.
 */
export default class SliderExampleControlled extends Component {
  
  constructor(props) {
    super(props);
    this.state = {sliderValue: 2};
  }
  
  handleSlider = (event, value) => {
    this.setState({sliderValue: value});
    this.props.getControlValue(value);
  };
  
  render() {
    
    return (
      <MuiThemeProvider>
        <div style={{width:70, minWidth:70, maxWidth:70}}>
          <Slider
            min={0}
            max={9}
            step={1}
            defaultValue={5}
            value={this.state.sliderValue}
            onChange={this.handleSlider}/>
        </div>
      </MuiThemeProvider>
    );
  }
}