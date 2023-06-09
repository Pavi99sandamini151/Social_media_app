import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

// Make a GET request to your Firebase Functions endpoint
axios.get('https://us-central1-my-project.cloudfunctions.net/myFunction')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
