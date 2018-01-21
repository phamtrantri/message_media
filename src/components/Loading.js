import React, { Component } from 'react'
import loading from '../assets/Loading.svg';
import '../styles/loading.css';
class Loading extends Component {
  render() {
    return (
      <div className="loading-icon">
        <img src={loading} alt="Loading..." />
      </div>
    )
  }
}

export default Loading