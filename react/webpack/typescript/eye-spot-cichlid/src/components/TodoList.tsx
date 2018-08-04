import * as React from 'react'
import * as PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList:any = (event:any) => (
  <ul>
    {event.todos.map((todo:any) =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => event.toggleTodo(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList