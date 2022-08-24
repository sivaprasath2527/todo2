import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return <>
  <ol>
  <li>
  <Link className="link" to="/Home">Home</Link>
  </li>
  <li>
  <Link className="link" to="/about">about</Link>
  </li>
  <li>
  <Link className="link" to="/Profile">profile</Link>
  </li>
  </ol>
  
 
  </>
}

export default App;