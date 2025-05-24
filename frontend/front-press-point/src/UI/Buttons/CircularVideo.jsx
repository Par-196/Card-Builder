import videoFile from '../../assets/Video/video1.mp4'

export default function CircularVideo() {
  return (
    <video
      src={videoFile}
      autoPlay
      loop
      muted
      playsInline
      style={{
        width: 520,
        height: 520,
        borderRadius: '100%',   
        objectFit: 'cover',    
        display: 'block',   
        overflow: 'hidden',   
      }}
    />
  )
}