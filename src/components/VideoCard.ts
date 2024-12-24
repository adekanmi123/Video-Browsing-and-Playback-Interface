import React from "react";

   const VideoCard: React.FC<{ video: any }> = ({ video }) => (
     <div className="p-4 border rounded hover:shadow-lg">
       <img src={video.thumbnail} alt={video.title} className="w-full h-auto" />
       <h3 className="mt-2 text-lg font-semibold">{video.title}</h3>
       <span className="text-sm text-gray-500">{video.duration}</span>
     </div>
   );

   export default VideoCard;