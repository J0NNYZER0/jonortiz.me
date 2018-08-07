import React from 'react';

const Footer = () => {
  let today = new Date(),
  year = today.getFullYear();
  return (
    <footer>
      <ul className="menu__social">
        <li>
          <a href="https://www.facebook.com/mindctrlindustries/" target="_blank">
            <span style={{ backgroundImage: 'url(https://s3.us-east-2.amazonaws.com/ui-icons/facebook.svg' }} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/mindctrlindustries/" target="_blank">
            <span style={{ backgroundImage: 'url(https://s3.us-east-2.amazonaws.com/ui-icons/instagram.svg' }} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Mind_Ctrl_1984" target="_blank">
            <span style={{ backgroundImage: 'url(https://s3.us-east-2.amazonaws.com/ui-icons/twitter.svg' }} />
          </a>
        </li>
        <li>
          <a href="https://mind-ctrl-industries.tumblr.com" target="_blank">
            <span style={{ backgroundImage: 'url(https://s3.us-east-2.amazonaws.com/ui-icons/tumblr.svg' }} />
          </a>
        </li>
      </ul>
      <ul className="company_info">
        <li>
          <span className="copyright">&copy; {year} Jon Ortiz</span>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
