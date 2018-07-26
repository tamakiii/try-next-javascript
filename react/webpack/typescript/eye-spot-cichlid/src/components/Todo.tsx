import * as React from 'react'
import * as PropTypes from 'prop-types'

const Todo:any = (event:any) => (
  <li
    onClick={event.onClick}
    style={ {
      textDecoration: event.completed ? 'line-through' : 'none'
    }}
  >
    {event.text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo