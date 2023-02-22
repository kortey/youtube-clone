import React from 'react'
import { Link } from 'react-router-dom'
import { Box,Typography,Card,CardContent,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({channelDetail}) => {
  return (
      <Box sx={{borderRadius:'20px',display:"flex",justifyContent:"center",alignItems:'center',width:{md:"320px" ,xs:"350px"},margin:"auto"}}>
          <Link to={`channel/${channelDetail?.id.channelId}`}>
              <CardContent  sx={{display:'flex',flexDirection:'column', color:"#fff" ,}}>
                 <CardMedia
                  image={channelDetail?.snippet?.thumbnails?.default.url || demoProfilePicture} 
                   alt={channelDetail?.snippet?.channelTitle}
                  sx = {{borderRadius:"50%" ,height:'180px',width:"180px" ,mb:2 ,border:"1px solid e3e3e3"}}/>
                  
                   < Typography sx={{color:"white",textAlign:"center"}}>
                       {channelDetail?.snippet?.title}
                   </Typography>
                   {channelDetail?.statistics?.subscriberCount && (
                    <Typography fontSize={12} style={{textAlign:"center" }}>
                      {parseInt(channelDetail?.statistics?.subscriberCount.toLocaleString())} Subscribers
                    </Typography>
                   )}
              </CardContent>
          </Link> 
      </Box>
  )
}

export default ChannelCard
