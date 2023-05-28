import Button from "../../atoms/Button/Button";

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map(todo => {
        return (
          <li key={todo.id}>
            {todo.name}
            {/* <button onClick={() => props.handleRemove(todo.id)}>X</button> */}
            <Button
              onClick={() => props.handleRemove(todo.id)}
              text='X'
            />
          </li>
        )
      })}
    </ul>
  )
}
export default TodoList;