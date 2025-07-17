import './Pages.css'

const ServicesPage = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that enhance user experience.'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.'
    }
  ]

  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Our Services</h1>
        <p className="services-intro">
          We offer a comprehensive range of digital services to help your business grow.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="service-button">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
