import './App.css';
import Todo from './components/Todo';

const App = () => {

  const todos = [
    { id: 1, title: 'wash dishes', completed: false },
    { id: 2, title: 'start test practice', completed: true }
  ]

  return (

    <div className="App">
      {todos.map(el => {
        return <Todo todo={ el } />
      })}
    </div>
    
  );
}

export default App;
