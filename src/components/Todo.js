const Todo = (props) => {
    return (
        <div>
            {props.todo.title} <input type="checkbox" onChange={() => props.checkboxHandler(props.todo.id)} checked={props.todo.completed}></input>
        </div>
    );
}

export default Todo;