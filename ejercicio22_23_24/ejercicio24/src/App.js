
import './App.css';
import TodosContainer from './components/containers/TodoContainer';
import TodoFormContainer from './components/containers/TodoFormContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodosContainer></TodosContainer>
        <TodoFormContainer></TodoFormContainer>
      </header>
    </div>
  );
}

export default App;
