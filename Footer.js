import React from 'react';

function Footer() {
  const currentDate = new Date().toLocaleDateString();
  
  return (
    <footer>
      Date: {currentDate} | Group Members: [Toan], [Denis]
    </footer>
  );
}

export default Footer;