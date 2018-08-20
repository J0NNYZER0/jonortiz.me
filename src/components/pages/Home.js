import React from 'react';
import Parallax from 'react-springy-parallax';
import Modal from '../common/modals/Index';
import Footer from '../common/Footer';
import ContactForm from '../common/forms/Contact';
import jobsData from '../../data/jobs.json';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: {
        show: false,
        title: '',
        content: ''
      }
    }

    this.toggle = this.toggle.bind(this)
  }

  componentWillUpdate(nextProps, nextState) {

    if (nextProps.scrollToElement !== null) {
      setTimeout(() => this.refs.parallax.scrollTo(nextProps.scrollToElement), 100);

    }
  }

  toggle(title, content) {
    console.log('title', title)
    let show = (this.state.modal.show === true) ? false : true;

    this.setState({
      modal: {
        show: show,
        title: title || null,
        content: content || null
      }});
  }

  getProjectDetails() {

    return(
      <div className="project_details">
        <ul>
          <li>Project</li>
          {jobsData.apple.projects.map(el => <li>{el}</li>)}
        </ul>
        <ul>
          <li>Responsibilities</li>
          {jobsData.apple.responsibilities.map(el => <li>{el}</li>)}
        </ul>
      </div>
    )
  }

  render() {
    const styles = {
      fontFamily: 'Menlo-Regular, Menlo, monospace',
      fontSize: 14,
      lineHeight: '10px',
      color: 'white',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }
    console.log('data', jobsData)
    return (
        <main className="home">
          <Modal show={this.state.modal.show} toggle={this.toggle.bind(this, '', '')} title={this.state.modal.title} content={this.state.modal.content} />
          <section>
            <Parallax ref={"parallax"} pages={10}>
              <Parallax.Layer offset={0} speed={1} style={styles}
                  onClick={() => this.refs.parallax.scrollTo(1)}>
                <section className="frame start">
                  <h1>Full Stack</h1>
                  <h1>Engineer</h1>
                  <p className="first">
                    Pushing &nbsp;<b>UI</b>s &nbsp;<b>API</b>s and&nbsp; <b>DB</b>s to the edge of technology.<br />
                    Empowering people to manage, protect and understand data.
                  </p>
                  <a className="animated_down_arrow"><span className="down-arrow" /></a>
                </section>
              </Parallax.Layer>
              <Parallax.Layer offset={1} speed={1}>
                <section className="frame">
                  <h1>Experience</h1>
                  <div className="job_wrapper">
                    <div>
                      <div className="job_date">
                        <h2>2014 - 2018</h2>
                      </div>
                    </div>
                    <div>
                      <div className="job_title">
                        <h3>Team Lead @ Apple, Inc.</h3>
                      </div>
                      <div className="job_location">
                        <h3>Cupertino, CA</h3>
                      </div>
                    </div>
                    <div className="project_details">
                      <ul>
                        <li><h2>Projects</h2></li>
                        {jobsData.apple.projects.map(el => <li>{el}</li>)}
                      </ul>
                      <ul>
                        <li><h2>Responsibilities</h2></li>
                        {jobsData.apple.responsibilities.map(el => <li>{el}</li>)}
                      </ul>
                    </div>
                    <div className="button-wrapper">
                      <button className="button" onClick={this.toggle.bind(this, 'Projects', this.getProjectDetails())}>Projects</button>
                      <button className="button" onClick={this.toggle.bind(this, 'Responsibilities', this.getProjectDetails())}>Responsibilities</button>
                    </div>
                  </div>
                  <div className="job_wrapper">
                    <div>
                      <div className="job_date">
                        <h2>2014</h2>
                      </div>
                    </div>
                    <div>
                      <div className="job_title">
                        <h3>Solutions Architect @ Lazydays RV</h3>
                      </div>
                      <div className="job_location">
                        <h3>Brandon, FL</h3>
                      </div>
                    </div>
                    <div className="project_details">
                      <ul>
                        <li><h2>Projects</h2></li>
                        {jobsData.apple.projects.map(el => <li>{el}</li>)}
                      </ul>
                      <ul>
                        <li><h2>Responsibilities</h2></li>
                        {jobsData.apple.responsibilities.map(el => <li>{el}</li>)}
                      </ul>
                    </div>
                    <div className="button-wrapper">
                      <button className="button" onClick={this.toggle.bind(this, 'Projects', this.getProjectDetails())}>Projects</button>
                      <button className="button" onClick={this.toggle.bind(this, 'Responsibilities', this.getProjectDetails())}>Responsibilities</button>
                    </div>
                  </div>
                  <div className="job_wrapper">
                    <div>
                      <div className="job_date">
                        <h2>2011 - 2014</h2>
                      </div>
                    </div>
                    <div>
                      <div className="job_title">
                        <h3>Senior Software Engineer @ HSN, Inc.</h3>
                      </div>
                      <div className="job_location">
                        <h3>St Pete, FL</h3>
                      </div>
                    </div>
                    <div className="project_details">
                      <ul>
                        <li><h2>Projects</h2></li>
                        {jobsData.apple.projects.map(el => <li>{el}</li>)}
                      </ul>
                      <ul>
                        <li><h2>Responsibilities</h2></li>
                        {jobsData.apple.responsibilities.map(el => <li>{el}</li>)}
                      </ul>
                    </div>
                    <div className="button-wrapper">
                      <button className="button" onClick={this.toggle.bind(this, 'Projects', this.getProjectDetails())}>Projects</button>
                      <button className="button" onClick={this.toggle.bind(this, 'Responsibilities', this.getProjectDetails())}>Responsibilities</button>
                    </div>
                  </div>
                  <div className="job_wrapper">
                    <div>
                      <div className="job_date">
                        <h2>2009 - 2011</h2>
                      </div>
                    </div>
                    <div>
                      <div className="job_title">
                        <h3>Mobile Web Engineer @ Madmobile</h3>
                      </div>
                      <div className="job_location">
                        <h3>Tampa, FL</h3>
                      </div>
                    </div>
                    <div className="project_details">
                      <ul>
                        <li><h2>Projects</h2></li>
                        {jobsData.apple.projects.map(el => <li>{el}</li>)}
                      </ul>
                      <ul>
                        <li><h2>Responsibilities</h2></li>
                        {jobsData.apple.responsibilities.map(el => <li>{el}</li>)}
                      </ul>
                    </div>
                    <div className="button-wrapper">
                      <button className="button" onClick={this.toggle.bind(this, 'Projects', this.getProjectDetails())}>Projects</button>
                      <button className="button" onClick={this.toggle.bind(this, 'Responsibilities', this.getProjectDetails())}>Responsibilities</button>
                    </div>
                  </div>
                </section>
              </Parallax.Layer>
              <Parallax.Layer offset={5} speed={1} onClick={() => this.refs.parallax.scrollTo(0)}>
                <section className="frame skillsets">
                  <h1>Skillsets</h1>
                  <h2>UI</h2>
                  <ul className="tagcloud">
                    <li>React</li>
                    <li>Redux</li>
                    <li>Webpack</li>
                    <li>Browsersync</li>
                    <li>ESlint</li>
                    <li>Jest</li>
                    <li>Enzyme</li>
                    <li>HTML5</li>
                    <li>Sass</li>
                    <li>SocketIO</li>
                    <li>Electron</li>
                    <li>ReactNative</li>
                  </ul>
                  <h2>API</h2>
                  <ul className="tagcloud">
                    <li>Nodejs</li>
                    <li>Hapijs</li>
                    <li>AuthJWT</li>
                    <li>AuthCookie</li>
                    <li>Catbox</li>
                    <li>Boom</li>
                    <li>Handlebars</li>
                    <li>Vision</li>
                    <li>Lab</li>
                    <li>Code</li>
                    <li>Swagger</li>
                    <li>Lodash</li>
                    <li>Rxjs</li>
                    <li>AWS</li>
                    <li>Heroku</li>
                  </ul>
                  <h2>DB</h2>
                  <ul className="tagcloud">
                    <li>MySQL</li>
                    <li>Redis</li>
                    <li>MongoDB</li>
                    <li>Cassandra</li>
                    <li>Kafka</li>
                    <li>GraphQL</li>
                    <li>ElasticSearch</li>
                  </ul>
                </section>
              </Parallax.Layer>
              <Parallax.Layer offset={7} speed={1} onClick={() => this.refs.parallax.scrollTo(0)}>
                <section className="frame edu">
                  <h1>Education</h1>
                  <ul>
                    <li>
                      BFA, Graphic Design 3.84<br />
                      Montserrat College of Art
                    </li>
                  </ul>
                </section>
              </Parallax.Layer>
              <Parallax.Layer offset={8} speed={1}>
                <section className="frame resume">
                  <h1>Download My Resume</h1>
                  <div className="download-resume-container">
                    <a className="download-resume" target="_blank" href="https://s3.us-east-2.amazonaws.com/jonortiz.me/resume/jon-ortiz-2018.pdf" />
                  </div>
                </section>
              </Parallax.Layer>
              <Parallax.Layer offset={9} speed={1}>
                <section className="frame end">
                  <h1>Thank you</h1>
                  <ContactForm />
                </section>
              </Parallax.Layer>
              <Footer />
            </Parallax>
          </section>
        </main>
    );
  }
}

export default Home;
