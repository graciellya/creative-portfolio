import './Pages.css'

const HomePage = () => {
  return (
    <div className="page-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">GRACIELLY</h1>
          <p className="hero-subtitle">
            DJ graciellyelly
          </p>
          <div className="hero-description">
            <p>
              I'm a musician and creative who uses authentic expression to connect with new friends.<br />
              I'm currently studying at Stanford University, where I explore the intersection of music, technology, and community.<br />
              My work centers my cultural roots and personal experiences, creating a unique sound that resonates with diverse audiences.<br />
              I'm experienced in audio engineering, programming, and music production.<br />
              <br />
              Feel free to reach out and connect!<br />
              <br />
              email: gabreu [at] stanford [dot] edu<br />
              personal email: grracielly [at] gmail [dot] com<br />
              instagram: grracielly 
            </p>
          </div>
          
        </div>
        <div className="hero-visual">
          <div className="artist-photo-container">
            <img 
              src="/homeimg.png"
              alt="Artist performing"
              className="artist-photo"
            />
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
