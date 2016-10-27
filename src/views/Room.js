import React, {Component} from 'react';
import Slot from './../controls/Slot';


export default class Room extends Component {
  
  constructor(props) {
    super(props);
    this.state = {apiCode: ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']};
  }
  
  render() {
    
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column'}}>
        
        <h2>Current API Code: {this.state.apiCode}</h2>
        
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap:'wrap', maxWidth:'300px'}}>
          {this.state.apiCode.map((slotValue, index) => <Slot key={index} value={slotValue} index={index}/>)}
        </div>
      </div>
    )
  }
}