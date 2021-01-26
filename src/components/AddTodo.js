import { useState } from 'react';

const AddTodo = (props) => {
    const [name, setName] = useState(''); // same as class components this.state.name and this.setState
    //const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAdd(name);
        setName("");
    }

    const handleChange = (e) => {
        setName(e.target.value);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={name} onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>  
        </div>
    );
}

export default AddTodo;