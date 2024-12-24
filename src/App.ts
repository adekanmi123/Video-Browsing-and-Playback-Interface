
import React, { useState, useEffect } from "react";
import VideoGrid from "./components/VideoGrid";
import SearchBar from "./components/SearchBar";
import VideoDetails from "./components/VideoDetails";
import mockData from "./mockData.json";

const App: React.FC = () => {
  const [videos, setVideos] = useState(mockData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = mockData.filter(
      (video) =>
        video.title.toLowerCase().includes(term.toLowerCase()) ||
        video.genre.toLowerCase().includes(term.toLowerCase())
    );
    setVideos(filtered);
  };

  return (
    <div className="p4">
      <SearchBar onSearch={handleSearch} />
      {!selectedVideo ? (
        <VideoGrid videos={videos} onSelectVideo={setSelectedVideo} />
      ) : (
        <VideoDetails video={selectedVideo} onBack={() => setSelectedVideo(null)} />
      )}
    </div>
  );
};

export default App;
