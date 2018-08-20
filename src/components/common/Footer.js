import React from 'react';

const Footer = () => {
  let today = new Date(),
  year = today.getFullYear();
  return (
    <div>
    <div className="love_message">
      <p>
        Made with 🖤 by me. The <b>UI</b> is Reactjs.
        The <b>API</b> is Nodejs. The <b>DB</b> is Mysql.
        It lives on <b>Heroku</b>. Some stuff is on <b>AWS</b>. Here is my <b>git</b> repo.
      </p>
    </div>
    <footer>
      <ul className="menu__social">
        <li>
          <a href="https://github.com/J0NNYZER0" target="_blank">
            <span style={{ backgroundImage: 'url(https://s3.us-east-2.amazonaws.com/ui-icons/white/github.svg' }} />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@J0NNYZER0" target="_blank">
            <span style={{ backgroundImage: 'url(https://s3.us-east-2.amazonaws.com/ui-icons/medium.svg' }} />
          </a>
        </li>
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
      <ul className="site_love">
        <li>
          <a href="#" target="_blank">
            <span style={{ backgroundImage: 'url(https://s3.us-east-2.amazonaws.com/ui-icons/heart.svg' }} />
          </a>
        </li>
      </ul>
      <ul className="company_info">
        <li>
          <span className="copyright">&copy; {year} Jon Ortiz</span>
        </li>
      </ul>
    </footer>
    </div>
  );
};

export default Footer;
