"use client";

import Thumbnail from "@/components/ui/Thumbnail";
import { fetchVideos } from "@/lib/api";
import { useState } from "react";
import useSWR from "swr";

export default function Home() {
  const [badge, setBadge] = useState("All");

  const {
    data: videoResults,
    error,
    isLoading,
  } = useSWR("fetchVideo/${badge}", () => fetchVideos(badge, 9));


  console.log(videoResults);

  return (
    <>
      <div className="px-2 md:pl-[252px] fixed top-16 py-2 left-0 w-screen dark:bg-black bg-white">
        Video Results
      </div>

      <div className="flex flex-wrap">
        {videoResults?.map((video) => (
          <Thumbnail key={video.id} video={video} />
        ))}
      </div>
    </>
  );
}
