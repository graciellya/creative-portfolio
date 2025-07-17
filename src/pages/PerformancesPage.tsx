import './Pages.css'

const PerformancesPage = () => {
  const liveConcerts = [
    {
      title: "Gridlock",
      description: "audiovisual performance blending conventional music and noise pollution. through the hidden harmony of what is pleasant and expected and what is jarring, we can better appreciate the unexpected.",
      ytLink: "https://youtu.be/oYwQmrE2L-M",
      duration: "3 min",
      venue: "CCRMA, Stanford"
    },
    {
      title: "StrawberryCough",
      description: "audiovisual performance centering meditative experience featuring sine bells and live visuals",
      ytLink: "https://youtu.be/00oJbgdEl8AQ",
      duration: "6 min",
      venue: "CCRMA, Stanford"
    }
  ]

  // Helper to extract video ID from YouTube link
  const getVideoId = (url: string) => {
    const match = url.match(/(?:v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/)
    return match ? match[1] : ''
  }

  return (
    <div className="page-container performances-page">
      <div className="page-header">
        <h1 className="page-title"> PERFORMANCES</h1>
        
      </div>

      <div className="performance-section">
        
        <div className="videos-grid">
          {liveConcerts.map((video, videoIndex) => (
            <div key={videoIndex} className="video-card">
              <div className="video-container">
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${getVideoId(video.ytLink)}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-info">
                <h3>{video.title}</h3>
                <p className="video-description">{video.description}</p>
                <div className="video-meta">
                  <span className="video-duration">⏱️ {video.duration}</span>
                  <span className="video-venue">📍 {video.venue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default PerformancesPage
