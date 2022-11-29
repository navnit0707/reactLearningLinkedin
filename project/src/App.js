import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [emotion, setEmotion] = useState("happy");
  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={()=> setEmotion("sad")}>sad</button>
      <button onClick={()=>setEmotion("Excited")}>Excited</button>
    </div>
  );
}

export default App;
