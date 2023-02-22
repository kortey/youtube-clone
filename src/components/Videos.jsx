import React from 'react'
import {Stack,Box} from "@mui/material";
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';



const Videos = ({videos,direction}) => {

  if(!videos?.length) return "loading..."
  return (
    <div>
      <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="flex-start" gap={2}>
            {videos.map((video,idx)=>(
               <Box key={idx}>
                 {video.id.videoId && <VideoCard video={video}/>}
                 {video.id.channelId && <ChannelCard channelDetail={video}/>}
              </Box>
            ))}
      </Stack>
     
    </div>
  )
}

export default Videos
