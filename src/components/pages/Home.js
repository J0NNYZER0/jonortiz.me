import React from 'react';
import Footer from '../common/Footer';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <main className="home">
        <section>
          <div>
            <h1>Full Stack Engineer</h1>
            <p>
              Pushing &nbsp;<b>UI</b>s &nbsp;<b>API</b>s and&nbsp; <b>DB</b>s to the edge of technology.<br />
              Empowering people to manage, protect and understand data.
            </p>
          </div>
          {/*<a className="animated_down_arrow"><span className="down-arrow" /></a>*/}
        </section>
        <Footer />
      </main>
    );
  }
}

export default Home;
