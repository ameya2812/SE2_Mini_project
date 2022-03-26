import logo from './logo.svg';
import './App.css';
import Home  from './pages/Home';
import Appbar from './components/Appbar';

function App() {
  return (
    <div className="App">
      <Home/>
      <div>
				<Appbar />
			</div>
    </div>
  );
}

export default App;
