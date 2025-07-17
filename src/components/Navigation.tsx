import './Navigation.css'

interface NavigationProps {
  currentPage: string
  onPageChange: (page: string) => void
}

const Navigation = ({ currentPage, onPageChange }: NavigationProps) => {
  const pages = [
    { id: 'home', label: 'Home', icon: '⾕' },
    { id: 'music', label: 'Music', icon: '⋆♪₊' },
    { id: 'photography', label: 'Photography', icon: '⊹𖠂˖' },
    { id: 'performances', label: 'Performances', icon: '₊𓀤⊹' }
  ]

  return (
    <nav className="floating-nav">
      <div className="nav-container">
        {pages.map((page) => (
          <button
            key={page.id}
            className={`nav-button ${currentPage === page.id ? 'active' : ''}`}
            onClick={() => onPageChange(page.id)}
          >
            <span className="nav-icon">{page.icon}</span>
            <span className="nav-label">{page.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
