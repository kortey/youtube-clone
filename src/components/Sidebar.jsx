import React from 'react'
import { Stack } from '@mui/system'
import {categories} from "../utils/constants"



const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack 
    direction="row"
    sx={{overflowY:"auto",height:{xs:"auto",md:"95%"},flexDirection:{md:"column"},
    }}>

      {categories.map((category)=>{
        return <button className='category-btn' onClick={()=>setSelectedCategory(category.name)} style={{background:category.name ===selectedCategory && "#fc1503",color:"#fff" }} key={category.name}>
           <span style={{color:category.name === selectedCategory? "#fff" : "red",marginRight:"15px"}}>{category.icon}</span>
           <span style={{color:"#fff", opacity:category.name === selectedCategory? "1" : "0.8"}}>{category.name}</span>
        </button>
      })}

    </Stack>
  )
}

export default Sidebar
