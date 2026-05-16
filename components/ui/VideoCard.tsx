function VideoCard() {

  return (
    <div
      className="relative h-full w-full cursor-pointer overflow-hidden rounded-3xl bg-[#0d0d0d]"
    >
      <div className="flex h-full w-full items-center justify-center">
         <video
        className="aspect-video h-full w-full object-cover"
        src="/intro.mp4"
        poster="/images/intro-thumbnail.png"
        preload="none"
        controls
        playsInline
      />
      </div>
    </div>
  )
}

export default VideoCard