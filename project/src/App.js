import './App.css';
import { useEffect, useState } from 'react';

function GithubUser({name,location}){
  return(
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading , setLoading] = useState(true);
  useEffect(()=>{
    setLoading(true);
    fetch(`https://api.github.com/users/navnit0707`)
    .then((respose)=> respose.json())
    .then(data=>setData(data))
    .then(()=>setLoading(false))
    .catch(setError);
  },[]);
  
  
  if(loading){
    return <h1>loading...</h1>
  }

  if(error){
    return <h1>error</h1>
  }

  return(
    <GithubUser name={data.name} location={data.location}/>
  );
}

export default App;
