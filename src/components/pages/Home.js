import React from 'react';
import Footer from '../common/Footer';
import data from '../../data/home.json';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <main className="home">
        <section>
          <div>
            <h1>{data.title}</h1>
            <p dangerouslySetInnerHTML={{__html: data.tagline}} />
          </div>
          {/*<a className="animated_down_arrow"><span className="down-arrow" /></a>*/}
        </section>
        <Footer />
      </main>
    );
  }
}

export default Home;
