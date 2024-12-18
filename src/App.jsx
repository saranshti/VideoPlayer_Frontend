import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import VideoCard from "./components/VideoCard/VideoCard";
import { cn } from "./utils/cn.js";

function App() {
  const [count, setCount] = useState(0);
  const videoCards = new Array(100).fill(null);

  //flex work with best aspect-ratio
  return (
    <div
      className={cn(
        `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 bg-black`
      )}
    >
      {videoCards.map((_, index) => (
        <div key={index} className="flex">
          <VideoCard />
        </div>
      ))}
    </div>
  );
}

export default App;
