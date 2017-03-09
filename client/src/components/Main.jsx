
import React from 'react';
import { Link } from 'react-router';

const Main = ({children}) => (
  <div>
    <h1>A long time ago in a galaxy far, far away...</h1>
    <ul>
      <li><Link to='/home'>Home</Link></li>
      
      <li><Link to='/people'>People</Link></li>
      <li><Link to='/ships'>Ships</Link></li>

    </ul>
    {children}
  </div>
)

export default Main;