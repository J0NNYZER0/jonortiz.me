import React from 'react';
import Footer from '../common/Footer';

class Skillsets extends React.Component {
  render() {
    return (
      <main className="skillsets">
        <section>
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
        <Footer />
      </main>
    );
  }
}

export default Skillsets;
