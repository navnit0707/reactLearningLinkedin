import './App.css';
import {  useReducer} from 'react';

function App() {
  const [checked, setChecked] = useReducer((checked)=> !checked , false);

  // second arg in useEffect is [emotion] which means if there is 
  //any change in emotion then render it again
  return (
    <div className="App">
      <input type="checkbox" value={checked} onChange={setChecked} />
      <label>{checked ? "checked" : "not checked"}</label>
    </div>
  );
}

export default App;
