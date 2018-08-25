import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Footer from '../common/Footer';

class Skillset extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { skillset } = this.props;

    return (
      <main className="skillsets">
        <section>
          <h1>Skillsets</h1>
          {skillset.map((skill, i) => {
            return <div key={i}>
              <h2>{skill.title}</h2>
              {<ul className="tagcloud">
                {skill.items.map((item, ii) => <li key={ii}>{item}</li>)}
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

Skillset.propTypes = {
  skillset: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    skillset: state.skillset
  };
}

export default connect(mapStateToProps)(Skillset);
