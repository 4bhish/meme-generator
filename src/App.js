import './App.css';
import Troll from "./images/troll.svg"
import Meme from './Meme.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className='troll--face' src={Troll} />
        <h2 className='heading'>Meme Generator</h2>
        <h4 className='h4'>React Project</h4>
      </header>
      <Meme />
    </div>
  );
}

export default App;
