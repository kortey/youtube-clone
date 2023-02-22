import React from 'react'
import {useState,useEffect} from "react";
import {Link,useParams} from "react-router-dom"
import ReactPlayer from "react-player"
import { Typography,Box,Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import Videos from '../components/Videos';
import {  FetchApi} from "../utils/FetchApis";

  
const Videodetails = () => {
   const {id} = useParams()
   const [videoDetail,setVideoDetail]=useState(null)
   const [videos,setVideos]=useState([])
      
    

    useEffect(() => {
       FetchApi(`videos?part=snippet,statistics&id=${id}`)
       .then((data)=>setVideoDetail(data.items[0]))

        FetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
       .then((data)=>setVideos(data.items))
    }, [id])
    console.log(videoDetail,videos)

    if(!videoDetail) return "loading..."

   //  const {snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount}}=videoDetail
  return (
    <Box minHeight="94vh"> 
        <Stack direction={{xs:"column",md:"row",gap:"4rem"}}>
           <Box flex={1}  >
              <Box sx={{width:{xs:"100%",md:"80%"},top:"86px",ml:{xs:"0px",sm:"0px" ,md:'2rem'}}}>
                  <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls={true} className="react-player"/>
                 <Typography color="#fff" variant='h5' fontWeight="bold" p={2}>
                    {videoDetail.snippet.title}
                 </Typography>
                 <Stack direction="row" justfyContent="space-between" py={1} px={2} sx= {{color:"#fff"}}>
                  <Link to={`/channel/${videoDetail.snippet.channelId}`}>
                     <Typography variant={{sm:"subtitle1",md:'h6'}}>
                      {videoDetail?.snippet.channelTitle}
                      <CheckCircle sx={{fontSize:"12px",color:"#",ml:"5px"}}/>
                     </Typography>
                  </Link>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                     <Typography variant="body1" sx={{opacity:0.6,}}>
                          {parseInt(videoDetail.statistics.viewCount).toLocaleString()} views
                     </Typography>
                     <Typography variant="body1" sx={{opacity:0.6,}}>
                          {parseInt(videoDetail.statistics.likeCount).toLocaleString()} likes
                     </Typography>
                  </Stack>
                  

               </Stack>
                  <Typography variant="body1" sx={{opacity:0.6,}}>
                   {videoDetail?.snippet.description}
                  </Typography>
              </Box>

           </Box>
           <Box p={2} py={{md:1,xs:5}} justifyContent="center" alignItems="center">
               <Videos videos={videos} direction="column"/>
           </Box>
        </Stack>
        
    </Box>
  )
}

export default Videodetails
