import React from 'react';

export default function Navbar(props) {
  const getNavbarClasses = (theme) => {
    switch (theme) {
      case 'light':
        return 'navbar-light bg-light';
      case 'dark':
        return 'navbar-dark bg-dark';
      case 'blue':
        return 'navbar-dark bg-primary';
      case 'green':
        return 'navbar-dark bg-success';
      default:
        return 'navbar-light bg-light';
    }
  };

  const getTextColor = (theme) => {
    return theme === 'light' ? 'dark' : 'light';
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${getNavbarClasses(props.theme)}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            PR
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Projects
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Text Utils
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item disabled" href="/" aria-disabled="true">
                      Another Project
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/" aria-disabled="true">
                  Text Utils
                </a>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Color Palette
                </a>
                <ul className="dropdown-menu">
                  <li onClick={() => props.toggleMode('dark')}>Dark</li>
                  <li onClick={() => props.toggleMode('blue')}>Blue</li>
                  <li onClick={() => props.toggleMode('green')}>Green</li>
                </ul>
              </li>
            </ul>
            <div className={`form-check form-switch text-${getTextColor(props.theme)}`}>
              <label className="form-check-label" htmlFor="switchCheckDefault">
                Dark Mode
              </label>
              <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" checked={props.theme === 'dark'} onChange={() => props.toggleMode()} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
