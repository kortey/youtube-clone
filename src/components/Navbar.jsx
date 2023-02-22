import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import {logo} from "../utils/constants"






 function Navbar(){
  return (
    
      <div className='navbar'>
        <Link to="/" style={{display:"flex", alignItems:"center" }}>
          <img src={logo} alt="logo" height={45} className="logo"/>
        </Link>
        <SearchBar />
      </div>
  )
 }

export default Navbar
