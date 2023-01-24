// Write your code here
import './index.css'

const SimpleTodo = props => {
  const {deleteTodo, todoDetails} = props
  const {id, title} = todoDetails
  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-container">
      <p className="desc">{title}</p>
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default SimpleTodo
