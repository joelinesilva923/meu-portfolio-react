import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Projetado e desenvolvido por Joeline de Oliveira Silva.</p>
    </footer>
  );
};

export default Footer;