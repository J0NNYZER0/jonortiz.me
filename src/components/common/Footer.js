import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
    this.toggle = this.toggle.bind(this, this.state.toggle);
  }

  toggle() {
    let toggleState = this.state.toggle === true ? false : true;
    this.setState({toggle: toggleState});
  }

  render() {
    let today = new Date(),
    year = today.getFullYear();
    return (
      <div>
      <div className={(this.state.toggle) ? 'love_message show' : 'love_message'}>
        <p>
          Made with 🖤 by me. The UI is <b>Reactjs</b>.
          The API is <b>Nodejs</b>. The DB is <b>Mysql</b>.
          The PaAS is <b>Heroku</b>. The CDN is <b>AWS</b>. The code is on <b>git</b>.
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
            <a href="https://dribbble.com/J0NNYZER0" target="_blank">
              <span style={{ backgroundImage: 'url(https://s3.us-east-2.amazonaws.com/ui-icons/white/dribbble.svg' }} />
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
            <a onMouseEnter={this.toggle} onMouseLeave={this.toggle} target="_blank">
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
  }
}

export default Footer;
