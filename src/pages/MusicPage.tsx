import PixelBlast from "../components/PixelBlast";
import "./Pages.css";

const tracks = [
  {
    title: "",
    description: "",
    soundcloudUrl: "https://soundcloud.com/graciellyelly",
  },
];

const albums = [
  {
    title: "Undercurrent",
    description: "(2024)",
    imageUrl: "/undercurrents.png",
    soundcloudUrl:
      "https://soundcloud.com/music101_ccrma/sets/gracielly-under-current",
  },
  {
    title: "Cheli",
    description: "(2024), Chappell Lougee Fellowship",
    imageUrl: "/cheli.png",
    soundcloudUrl: "https://soundcloud.com/graciellyelly/sets/cheli",
  },
  {
    title: "Second Skin",
    description: "(2025), Institute for Diversity in the Arts Fellowship",
    imageUrl: "/secondskin.png",
    soundcloudUrl: "https://soundcloud.com/graciellyelly/sets/second-skin",
  },
];

const MusicPage = () => {
  return (
    <div className="page-container music-page">
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#5c0700"
          patternScale={6.75}
          patternDensity={2}
          pixelSizeJitter={0}
          enableRipples={false}
          speed={3}
          edgeFade={0}
          transparent
        />
      </div>
      <div style={{ position: "relative", zIndex: 1, paddingTop: "25vh" }}>
        {/* Second Section: Albums & EPs */}
        <div className="music-section" style={{ marginBottom: "50vh" }}>
          <div className="section-header">
            <h2>Albums & EPs</h2>
          </div>
          <div className="tracks-grid">
            {albums.map((album, idx) => (
              <div key={idx} className="track-card">
                <a
                  href={album.soundcloudUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={album.imageUrl}
                    alt={album.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      cursor: "pointer",
                    }}
                  />
                </a>
                <div className="track-info">
                  <h3>{album.title}</h3>
                  <p>{album.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom half container */}
        <div
          style={{
            minHeight: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingTop: "10vh",
          }}
        >
          {/* First Section: Tracks */}
          <div className="music-section" style={{ marginBottom: 0 }}>
            <div className="section-header">
              <h2>remixes, meet my beat series, and original tracks</h2>
            </div>
            <div className="soundcloud-grid">
              {tracks.map((track, idx) => (
                <div key={idx} className="soundcloud-card">
                  <div className="track-info">
                    <h3>{track.title}</h3>
                    <p>{track.description}</p>
                  </div>
                  <div
                    style={{
                      left: 0,
                      width: "100%",
                      height: 450,
                      position: "relative",
                    }}
                  >
                    <iframe
                      src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.soundcloudUrl)}&show_artwork=true&color=%235c0700`}
                      style={{
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        border: 0,
                      }}
                      allow="autoplay"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="music-bio"
            style={{ marginTop: "auto", paddingBottom: "3rem" }}
          >
            <div className="bio-content">
              <h3>About My Music</h3>
              <p>
                All of my music aims to heal and connect with listeners on the
                basis of play, justice, and visibility. I've produced and
                recorded all of my work independently. I'm currently using Logic
                Pro X and Ableton Live.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
