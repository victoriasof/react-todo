import './App.css';
import Todo from './components/Todo';
import {Component} from 'react';
import AddTodo from './components/AddTodo';

const todos = [
  {
    id: 1, 
    name: "todo1",
    completed: false
  },
  {
    id: 2, 
    name: "todo2",
    completed: false
  }
];

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: 'Manos',
      todos: todos
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

  render(){
    return (
      <div className="App">
        {this.state.todos.map(todo => (
          <Todo todo={todo} checkboxHandler={this.handleCheckboxToggle} />
        ))}

        <AddTodo />
      </div>
    );
  }
}  

export default App;
