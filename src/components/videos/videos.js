import { Box, Stack } from "@mui/material";
import {ChannelCard, VideoCard} from "../";

const Videos = ({video}) => {
  return (
    <Stack width={"100%"} direction={"row"} flexWrap={"wrap"} justifyContent={"start"} alignItems={"center"} gap={2}>
      {video.map(item=>(
        <Box key={item.id.videoId}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard video={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos