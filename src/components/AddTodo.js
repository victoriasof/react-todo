import { useState } from 'react';

const AddTodo = () => {
    const [name, setName] = useState(''); // same as class components this.state.name and this.setState
    //const [todos, setTodos] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div> 
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"></input>
                <button type="submit">Submit</button>
            </form>  
        </div>
    );
}

export default AddTodo;