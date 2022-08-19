
import './App.css';
import FilterContainer from './components/containers/FilterContainer';
import Filteroptions from './components/containers/FilterOptions';
import TodosContainer from './components/containers/TodoContainer';
import TodoFormContainer from './components/containers/TodoFormContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodosContainer></TodosContainer>
        <TodoFormContainer></TodoFormContainer>
        <Filteroptions></Filteroptions>
      </header>
    </div>
  );
}

export default App;
