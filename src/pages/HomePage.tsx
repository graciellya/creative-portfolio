// Component inspired by github.com/zavalit/bayer-dithering-webgl-demo
import PixelBlast from "../components/PixelBlast";
import "./Pages.css";

const HomePage = () => {
  return (
    <div
      className="page-container"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#5c0700"
          patternScale={6.75}
          patternDensity={2}
          pixelSizeJitter={0}
          enableRipples={false}
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={3}
          edgeFade={0}
          transparent
        />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-section hero-editorial">
          <div className="hero-visual">
            <div className="artist-photo-container">
              <img
                src="/profile.png"
                alt="Gracielly"
                className="artist-photo"
                style={{ maxWidth: "280px", height: "auto" }}
              />
            </div>
          </div>
          <div className="hero-content hero-wrap">
            <div className="hero-text-wrap">
              <span className="hero-dropcap">Gracielly</span>
              musician & creative—using authentic expression to connect.
              Currently at Stanford University, exploring music × technology ×
              community. Experienced in audio engineering, programming, and
              music production.
            </div>
            <div className="hero-contact">
              <span>
                gabreu [at] stanford [dot] edu | grracielly@gmail.com{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
