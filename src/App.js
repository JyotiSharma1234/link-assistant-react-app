import './App.css';
import Logo from './images/image.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={Logo}/>
      <div>
        tiny link<input type='text'/><br/>
        expanded link<input type='text'/>
      </div>
      </header>
    </div>
  );
}

export default App;
