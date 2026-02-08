import PixelBlast from "../components/PixelBlast";
import './Pages.css'

const AboutPage = () => {
  return (
    <div className="page-container">
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
      <div style={{ position: "relative", zIndex: 1 }} className="page-content">
        <h1>About Us</h1>
        <div className="about-content">
          <div className="about-text">
            
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="placeholder-image">
              <span>👥</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AboutPage
