import logo from './logo.svg';
import './App.css';
import Greet  from './components/Greet';
import Message from './components/Message';
import Button from './components/Button';
import helloServices from './services/helloServices';
import Hello from './components/Hello';
import Employee from './components/Employee';
import vinyl from './imports/vinyl.png';
import abbey from './imports/abbeyroad.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={vinyl} className="App-logo" alt="vinyl" />
        <p>{Hello()}</p>
        <Employee/>
        <Button/>
        {/* <Greet name="Liam">
          <Message/>
        </Greet>
        <Greet name="Sir Bryan">  
        </Greet> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
