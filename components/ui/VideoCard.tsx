'use client'

import PauseRounded from '@mui/icons-material/PauseRounded'
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded'
import { useRef, useState } from 'react'

function VideoCard() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    if (!videoRef.current) return

    if (playing) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }

    setPlaying(!playing)
  }

  return (
    <div
      className="relative h-full w-full cursor-pointer overflow-hidden rounded-3xl bg-[#0d0d0d]"
      onClick={toggle}
    >
      <div className="flex h-full w-full items-center justify-center">
        <div className="text-center text-sm text-white/30">
          <div className="mb-2 text-4xl">Video</div>
          Add /public/images/intro.mp4
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition hover:bg-white/30">
          {playing ? (
            <PauseRounded className="text-white" fontSize="large" aria-hidden />
          ) : (
            <PlayArrowRounded className="text-white" fontSize="large" aria-hidden />
          )}
        </div>
      </div>

      <div className="absolute bottom-4 left-4">
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          Short intro
        </span>
      </div>
    </div>
  )
}

export default VideoCard