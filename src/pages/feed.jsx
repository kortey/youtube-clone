import React,{useState,useEffect} from 'react'
import { Box ,Stack, } from '@mui/system'
import { Typography } from '@mui/material'
import Sidebar from '../components/Sidebar'
import Videos from  "../components/Videos"
import {FetchApi} from "../utils/FetchApis"



const Feed = () => {
   
   const [selectedCategory,setSelectedCategory] = useState("New")
   const [videos,setVideos] = useState([])

   useEffect(()=>{
      FetchApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data)=>setVideos(data.items))  
   },[selectedCategory]) 
   

  return (
    <Stack sx={{flexDirection:{sx:"column", md:"row"}}} className="feed">
       <Box sx={{height:{sx:"auto",md:"92vh"},borderRight:"1px solid #3d3d3d",px:{sx:0,md:2}}}>
          <Sidebar 
            selectedCategory ={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
            <h6>
               copyright 2022 richard
            </h6>
       </Box>
       <Box p={2} sx={{height:"90vh", flex:2, overflowY:"auto"}}>
          <Typography variant ="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>
             {selectedCategory}  <span style={{color:"#f31503"}}>
                videos
              </span>
          </Typography>
          <Videos videos={videos}/>
       </Box>
    </Stack>
  )
}

export default Feed
