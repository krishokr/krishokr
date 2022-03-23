import logo from './logo.svg';
import './Styles/style.css';
import Navigation from './Navigation';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <Home />
    </div>
  );
}

export default App;
