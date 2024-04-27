import React from 'react';

const Navbar = (props) => {
  const toggleMode = (e) => {
    e.preventDefault();
    props.setGeceModu(!props.geceModu);

    // Dark mode'u toggle ettikten sonra, App componentinin en üstteki div'ine dark-mode class'ını ekleyip çıkaralım
    const appDiv = document.querySelector('.App');
    if (appDiv) {
      appDiv.classList.toggle('dark-mode');
    }
  };

  return (
    <nav className="navbar">
      <h1>Kripto İzleyici</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.geceModu ? 'toggle toggled' : 'toggle'}
          data-testid="toggle-darkMode"
        />
      </div>
    </nav>
  );
};

export default Navbar;
