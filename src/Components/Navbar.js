import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid sticky-top">
    
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink to={`/`} className="nav-link active" aria-current="page" >Home Page</NavLink>
        </li>   
      </ul>
    </div>
  </div>
</nav>
        
        <div class="container-fluid">
            
        </div>
        
    </div>
  )
}

export default Navbar
