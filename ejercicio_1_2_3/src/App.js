import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/componentaA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteA name="Oscar" surname="Corral Garcia" email="prueba@prueba.com" ></ComponenteA>
      </header>
    </div>
  );
}

export default App;
