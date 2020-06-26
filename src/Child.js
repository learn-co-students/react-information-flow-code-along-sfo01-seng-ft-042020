import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor: '#FFF'
    }
  }

  render() {
    return (
      <div onClick={() => this.props.handleColorChange(getRandomColor())} 
      className="child" 
      style={{backgroundColor: this.props.color}}>
      </div>
    )
  }
}

export default Child
