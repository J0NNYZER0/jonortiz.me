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
      <footer>
        <div className={(this.state.toggle) ? 'love_message show' : 'love_message'}>
          <p>
            Made with 🖤 by me. The UI is <b>Reactjs</b>.
            The API is <b>Nodejs</b>. The DB is <b>Mysql</b>.
            The PaAS is <b>Heroku</b>. The CDN is <b>AWS</b>. The code is on <b>git</b>.
          </p>
        </div>
        <div className="menu__social">
          <span>
            <a href="https://github.com/J0NNYZER0" target="_blank">
              <span style={{ backgroundImage: 'url(https://s3.us-east-2.amazonaws.com/ui-icons/white/github.svg' }} />
            </a>
          </span>
          <span>
            <a href="https://dribbble.com/J0NNYZER0" target="_blank">
              <span style={{ backgroundImage: 'url(https://s3.us-east-2.amazonaws.com/ui-icons/white/dribbble.svg' }} />
            </a>
          </span>
          <span>
            <a href="https://medium.com/@J0NNYZER0" target="_blank">
              <span style={{ backgroundImage: 'url(https://s3.us-east-2.amazonaws.com/ui-icons/medium.svg' }} />
            </a>
          </span>
          <span>
            <a href="https://www.facebook.com/mindctrlindustries/" target="_blank">
              <span style={{ backgroundImage: 'url(https://s3.us-east-2.amazonaws.com/ui-icons/facebook.svg' }} />
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/jon__ortiz/" target="_blank">
              <span style={{ backgroundImage: 'url(https://s3.us-east-2.amazonaws.com/ui-icons/instagram.svg' }} />
            </a>
          </span>
          <span>
            <a href="https://twitter.com/J0NNYZER0" target="_blank">
              <span style={{ backgroundImage: 'url(https://s3.us-east-2.amazonaws.com/ui-icons/twitter.svg' }} />
            </a>
          </span>
          <span>
            <a href="https://mind-ctrl-industries.tumblr.com" target="_blank">
              <span style={{ backgroundImage: 'url(https://s3.us-east-2.amazonaws.com/ui-icons/tumblr.svg' }} />
            </a>
          </span>
        </div>
        <div className="site_love">
          <span>
            <a onMouseEnter={this.toggle} onMouseLeave={this.toggle} target="_blank">
              <span style={{ backgroundImage: 'url(https://s3.us-east-2.amazonaws.com/ui-icons/heart.svg' }} />
            </a>
          </span>
        </div>
        <div className="company_info">
          <span>
            <span className="copyright">&copy; {year} Jon Ortiz</span>
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;


/*<div>




*/