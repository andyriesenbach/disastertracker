import React from 'react'

export default class NoLoggedInUser extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <h1>No User</h1>
      </div>
    )
  }
}
