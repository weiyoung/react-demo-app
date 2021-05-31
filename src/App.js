import './App.css';
import Button from './components/Button';
import HiddenCat from './components/HiddenCat';
import TimeAndDate from './components/TimeAndDate';

function App() {
  return (
    <div className="App">
      <Button />
      <br />
      <HiddenCat />
      <br />
      <TimeAndDate />
    </div>
  );
}

export default App;
