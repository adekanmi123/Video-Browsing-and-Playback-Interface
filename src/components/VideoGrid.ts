import React from "react";
   import { VideoCard } from "./VideoCard";

   interface Video {
     id: number;
     title: string;
     thumbnail: string;
     duration: string;
   }

   const VideoGrid: React.FC<{ videos: Video[] }> = ({ videos }) => (
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
       {videos.map((video) => (
         <VideoCard key={video.id} video={video} />
       ))}
     </div>
   );

   export default VideoGrid;