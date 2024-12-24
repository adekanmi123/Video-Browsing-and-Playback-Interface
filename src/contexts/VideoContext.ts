import React, { createContext, useState, useContext } from "react";

const VideoContext = createContext<any>(null);

export const VideoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [likedVideos, setLikedVideos] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedVideos((prev) =>
      prev.includes(id) ? prev.filter((vid) => vid !== id) : [...prev, id]
    );
  };

  return (
    <VideoContext.Provider value={{ likedVideos, toggleLike }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => useContext(VideoContext);
