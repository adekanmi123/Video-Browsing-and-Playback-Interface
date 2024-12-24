import React from "react";

   const VideoDetails: React.FC<{ video: any }> = ({ video }) => (
     <div className="p-4">
       <video controls src={video.videoUrl} className="w-full"></video>
       <h1 className="mt-4 text-2xl font-bold">{video.title}</h1>
       <p>{video.description}</p>
     </div>
   );

   export default VideoDetails;