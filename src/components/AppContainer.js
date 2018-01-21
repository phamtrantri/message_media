import React, { Component } from 'react'

class AppContainer extends Component {
  render () {
    return (
      <main>
        {this.props.children}
      </main>
    )
  }
}

export default AppContainer