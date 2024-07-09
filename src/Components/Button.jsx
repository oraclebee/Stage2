import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div style={{display:'flex', alignItems:'center'}}>
        <button onClick={this.IncrementItem} style={{width:'30px', height:'30px', fontSize:'15px', border:'0px'}}>+</button>
        { this.state.show ? <h2 style={{border:'1px solid',paddingLeft:'10px',paddingRight:'10px'}}>{ this.state.clicks }</h2> : '' }
        <button onClick={this.DecreaseItem} style={{width:'30px', height:'30px', fontSize:'15px', border:'0px'}}>-</button>
        {/* <button onClick={this.ToggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </button> */}
      </div>
    );
  }
}

export default Button;