import React from "react";
import "./Footer.css";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Footer = () => {
  // Fecha
  let fecha = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="site-footer">
        <div className="copyright">
          <p>Thank you for visiting my site</p>
          <p>Page created by Rajesh</p>
          <p>&copy; {fecha}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
