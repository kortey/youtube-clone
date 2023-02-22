import React from 'react'
import {Link} from "react-router-dom"
import { Typography,Card,CardContent,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle } from '../utils/constants'

const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (
    <Card sx={{width:{ xs:'100%',sm:'358px', md:'320px'},borderRadius:0,margin:{xs:"auto"}}}>
       <Link to={videoId? `/video/${videoId}` :demoVideoUrl}>
          <CardMedia 
          image={snippet?.thumbnails?.high?.url} 
           alt={snippet?.title}
           sx ={{width:{xs:"100%",sm:"358px",md:"320px"} ,height: 180}}
          /> 
       </Link>
       <CardContent sx={{backgroundColor:"#1e1e1e",height:"106px"}}>
          <Link to={videoId? `/video/${videoId}` :demoVideoUrl}>
              <Typography variant='subtitle2' fontWeight="bold" color="white">
                 {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60) }
              </Typography>
          </Link>
          <Link to={snippet?.channelId? `/chanel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant='subtitle2' fontWeight="bold" color="grey">
                  {snippet?.channelTitle || demoChannelTitle }
                  <CheckCircle sx={{fontSize:12,color:'grey',ml:"5px"}} />
                </Typography>
          </Link>
       </CardContent>
    </Card>
   )
}

export default VideoCard
