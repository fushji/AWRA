import { useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import WeatherBox from './components/WeatherBox';

function App() {

  const [location, setLocation] = useState('Roma');

  return (
    <div className="App">
      <SearchBox setLocation={setLocation}/>
      <WeatherBox location={ location }/>
    </div>
  );
}

export default App;
