import React from 'react'
import {Link} from 'react-router-dom';
import './All.css'

const Header = () => {
  return (
    <>
      <div className='heading'>
          <h1 className='student'>
          
              <Link className='auncer_link' to="/">Student Detail</Link>
          </h1>
        <header>
        <ul>

            <li>
              <Link className='auncer_links' to="/home">Home</Link>
            </li>
            <li>
              <Link className='auncer_links' to="/student">Student</Link>
            </li>
            <li>
              <Link className='auncer_links' to="/contact">Contact</Link>
            </li>
        </ul>
        </header>
      </div>
    </>
  )
}

export default Header;