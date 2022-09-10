import React from 'react'

export default props => {
  return (
    <div>
      <div>
          <label htmlFor="passoInput">Passo: </label>
          <input value={this.state.passo}
          onChange={e => this.setState({ passo: +e.target.value })}
          id="passoInput"
          type="number" /> <br />
          </div>
    </div>
  )
}
