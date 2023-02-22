import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import { Search } from '@mui/icons-material'
import "./navbar.css"


const SearchBar = () => {
  const navigate=useNavigate();
  const [searchTerm,setSearchTerm]= useState("")
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(searchTerm){
       navigate(`/search/${searchTerm}`)
    }

   searchTerm("")
   
  }
  
  return (
      <div className='searchbar' >
       <form onSubmit={handleSubmit} style={{display:"flex",alignItems:"center"}}>

        <input 
         className='search-bar'
         placeholder="search"
         value={searchTerm}
         onChange={(e)=>setSearchTerm(e.target.value)}
        />
         <button type="submit" ><Search style={{color:"red"}}/></button>
        
       </form>
      </div>
    )
}

export default SearchBar
