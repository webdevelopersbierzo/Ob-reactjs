import logo from './logo.svg';
import './App.css';
import ClockFunctional from './Components/ClockFunctional';
//import Clock from './Components/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Clock></Clock> */}
        <ClockFunctional></ClockFunctional>
      </header>
      
    </div>
  );
}

export default App;
