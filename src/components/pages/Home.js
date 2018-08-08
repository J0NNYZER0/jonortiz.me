import React from 'react';
import Footer from '../common/Footer';

class Home extends React.Component {
  render() {
    return (
      <main className="home">
        <section>
          <div>
            <h1>Full Stack</h1>
            <h1>Engineer</h1>
          </div>
          <div className="tagline">
            <p className="first">Pushing <b>UI</b>s <b>API</b>s and <b>DB</b>s to the edge of technology.</p>
            <p>Empowering people to manage, protect and understand data.</p>
          </div>
          <div>
             <a className="down_animation"><span className="down-arrow" /></a>
          </div>
        </section>
        <section>
          <h1>Full Stack</h1>
          <h1>Engineer</h1>
        </section>
        <section className="last">
          <h1>Full Stack</h1>
          <h1>Engineer</h1>
        </section>
        <Footer />
      </main>
    );
  }
}

export default Home;
