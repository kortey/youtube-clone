import React, {useState,useEffect} from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/system"
import Videos from  "../components/Videos"
import ChannelCard from "../components/ChannelCard"
import { FetchApi } from "../utils/FetchApis"


const ChannelDetails = () => {
  const [channelDetail,setChannelDetail]= useState(null)
  const [videos,setVideos]=useState([])
   
  const {id}= useParams();

   useEffect(() => {
     FetchApi(`channels?part=snippet&&id=${id}`)
     .then((data)=>setChannelDetail(data?.items[0]))

     FetchApi(`search?channelId=${id}&part=snippet&order=date`)
     .then((data)=>setVideos(data?.items))
   }, [id])
   

  return (
    <div>
      <Box minHeight='94vh' >
            <Box >
              <div style={{
               background:"linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
               zIndex:10,
               height:"200px"
              }}>
              </div>
              <div style={{marginTop:'-100px'}}>
              <ChannelCard channelDetail={channelDetail} />
              </div>
                
            </Box>
            <Box display="flex" p={2}>
              <Box sx={{mr:{sm:'100px'}}} />
                 <Videos videos={videos} />
               
            </Box>
      </Box>
    </div>
  )
}

export default ChannelDetails
