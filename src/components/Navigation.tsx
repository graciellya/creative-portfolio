import { useState } from "react";
import "./Navigation.css";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation = ({ currentPage, onPageChange }: NavigationProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const pages = [
    { id: "home", label: "Home" },
    { id: "music", label: "Music" },
    { id: "photography", label: "Photography" },
    { id: "performances", label: "Performances" },
  ];

  const isHome = currentPage === "home";
  const isCollapsed = !isHome && !isExpanded;

  const handleNavClick = (pageId: string) => {
    if (pageId === currentPage && !isHome) {
      setIsExpanded((prev) => !prev);
      return;
    }
    onPageChange(pageId);
    setIsExpanded(false);
  };

  return (
    <nav className="floating-nav">
      <div
        className={`nav-container ${isCollapsed ? "collapsed" : "expanded"}`}
      >
        {pages.map((page) => (
          <button
            key={page.id}
            className={`nav-button ${currentPage === page.id ? "active" : ""}`}
            onClick={() => handleNavClick(page.id)}
          >
            <span className="nav-label">{page.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
