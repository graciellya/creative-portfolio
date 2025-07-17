import './Pages.css'

const AboutPage = () => {
  return (
    <div className="page-container">
      <div className="page-content">
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
  )
}

export default AboutPage
