"use client"
import React, { Suspense } from 'react'
import { useSearchParams } from "next/navigation";

function VideoComponent() {
  const videoPrefix = 'https://storage.googleapis.com/mt-yt-processed-videos-2910/'
  const videoSrc = useSearchParams().get('v');

  return <video controls src={videoPrefix + videoSrc}></video>;
}

export default function Watch() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1>Watch page</h1>
      <VideoComponent />
    </Suspense>
  )
}