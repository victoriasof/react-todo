import './App.css';
import Todo from './components/Todo';
import {Component} from 'react';
import AddTodo from './components/AddTodo';

// const todos = [
//   {
//     id: 1, 
//     name: "todo1",
//     completed: false
//   },
//   {
//     id: 2, 
//     name: "todo2",
//     completed: false
//   }
// ];

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: 'Manos',
      todos: []
    }
  }

  handleCheckboxToggle = (id) => {
    this.setState(prevState => {
      const todos = [...prevState.todos];
      const index = todos.findIndex(todo => todo.id === id);
      let todo = {...todos[index]};
      todo.completed = !todo.completed;
      todos[index] = todo;

      return {
        todos: todos
      };
      // console.log(prevState.todos[0].completed);
      // let newState = [...prevState.todos]
      // {
      //   todos: [
      //     {
      //       id: 1,
      //       name: 'Do something',
      //       completed: true
      //     },
            //{
        //       id: 2,
        //       name: 'Todo 2',
        //       completed: false
        //     }
      //   ]
      // }
    });
  }

  handleAdd = (name) => {
    this.setState(prevState => {
      let todos = [...prevState.todos];
      console.log(todos);
      todos.push({
        id: todos.length + 1,
        title: name,
        completed: false
      });

      return {
        todos: todos
      }
    });
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => this.setState({
      todos: data
    }));
  }

  render(){
    return (
      <div className="App">
        {this.state.todos.map(todo => (
          <Todo todo={todo} checkboxHandler={this.handleCheckboxToggle} />
        ))}

        <AddTodo onAdd={this.handleAdd} />
      </div>
    );
  }
}  

export default App;
