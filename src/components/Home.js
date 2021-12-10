import logo from '../logo.svg';
import '../App.css';
import Greet  from './Greet';
import Message from './Message';
import Button from './Button';
import helloServices from '../services/helloServices';
import Hello from './Hello';
import Employee from './Employee';
import vinyl from '../imports/vinyl.png';
import abbey from '../imports/abbeyroad.jpg';
import NavBar from './NavBar';

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <img src={vinyl} className="App-logo" alt="vinyl" />
        <p>{Hello()}</p>
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

export default Home;
