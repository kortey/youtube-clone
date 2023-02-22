import React,{useState,useEffect} from 'react'
import { Box ,Stack, } from '@mui/system'
import { Typography } from '@mui/material'
import Sidebar from '../components/Sidebar'
import Videos from  "../components/Videos"
import {FetchApi} from "../utils/FetchApis"
import { useParams } from 'react-router-dom'



const SearchFeed = () => {
   
   const {searchTerm} = useParams()
   const [videos,setVideos] = useState([])

   useEffect(()=>{
      FetchApi(`search?part=snippet&q=${searchTerm}`)
      .then((data)=>setVideos(data.items))  
    },[searchTerm]) 
   

  return (
    <Stack sx={{flexDirection:{sx:"column", md:"row"}}} className="feed">
     
       <Box p={2} sx={{height:"90vh", flex:2, overflowY:"auto"}}>
          <Typography variant ="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>
             search results for <span style={{color:"#f31503"}}>
                {searchTerm}
              </span>
          </Typography>
          <Videos videos={videos}/>
       </Box>
    </Stack>
  )
}

export default SearchFeed








