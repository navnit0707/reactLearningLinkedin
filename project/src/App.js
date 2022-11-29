import './App.css';
import {Link , Outlet} from 'react-router-dom';


export function Contact(){
  return(<div><nav>
    <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  </nav>
  <h1>Contact US</h1></div>);
}
function Home(){
  return(<div>
    <nav>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    </nav>
    <h1>
      My Website
    </h1>
  </div>);
}
export function History(){
  return(
    <div>
      <h2>History</h2>
    </div>
  );
}
export function About(){
  return(
    <div>
      <nav>
      <Link to="/">Home</Link>
    
    <Link to="/contact">Contact</Link>
    </nav>
    <h1>About</h1>
    <Outlet />
    </div>
  );
}
export function App() {
  
 return(
  <Home />
 );
}

