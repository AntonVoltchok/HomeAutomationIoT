import React, {Component} from 'react';
import Room from './Room';

export default class Rooms extends Component {
  
  constructor(props) {
    super(props);
    this.state = {rooms: []};
  }
  
  render() {
    
    if (this.state.rooms.length === 0)
      return <div>
        <h3>Room Creation</h3>
        <div><Room/></div>
      </div>;
    
    return (
      <div>
        <div style={{border:'1px solid hsb(227, 70, 70)'}}>Connect New Room</div>
        <h3>Current Rooms</h3>
        <Room/>
        {/*{this.state.rooms.map(room => <div>{room}</div>)}*/}
      </div>
    );
    
  }
  
}