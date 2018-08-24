import React from 'react';
import Footer from '../common/Footer';
import data from '../../data/skillsets.json';

class Skillsets extends React.Component {
  render() {
    return (
      <main className="skillsets">
        <section>
          <h1>Skillsets</h1>
          {data.map((skillset, i) => {
            return <div key={i}>
              <h2>{skillset.title}</h2>
              {<ul className="tagcloud">
                {skillset.items.map((item, ii) => <li key={ii}>{item}</li>)}
              </ul>}
            </div>
            }
          )}
        </section>
        <Footer />
      </main>
    );
  }
}

export default Skillsets;
