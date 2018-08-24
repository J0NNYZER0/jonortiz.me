import React from 'react';
import PropTypes from 'prop-types';

class Job extends React.Component {

  constructor(props) {
    super(props)

    this.getProjectDetails = this.getProjectDetails.bind(this)
  }

  getProjectDetails() {
    const { experience } = this.props;

    return(
      <div className="project_details">
        <ul>
          <li>Project</li>
          {experience.projects.map(el => <li>{el}</li>)}
        </ul>
        <ul>
          <li>Responsibilities</li>
          {experience.responsibilities.map(el => <li>{el}</li>)}
        </ul>
      </div>
    )
  }

  render() {
    const { experience } = this.props;

    return (
      <div className="job">
        <div>
          <div className="job_date">
            <h2>{experience.from} {experience.to && "- " + experience.to}</h2>
          </div>
        </div>
        <div className="job_header">
          <div className="job_title">
            <h3>{experience.title} @ {experience.company}</h3>
          </div>
          <div className="job_location">
            <h3>{experience.city}, {experience.state}</h3>
          </div>
        </div>
        <div className="project_details">
          <ul>
            <li><h2>Projects</h2></li>
            {experience.projects.map(el => <li>{el}</li>)}
          </ul>
          <ul>
            <li><h2>Skills</h2></li>
            {experience.responsibilities.map(el => <li>{el}</li>)}
          </ul>
        </div>
        <div className="button_wrapper">
          <button className="button" onClick={() => {}}>Projects</button>
          <button className="button" onClick={() => {}}>Skills</button>
        </div>
      </div>
    );
  }
}

Job.propTypes = {
  experience: PropTypes.object.required
};

export default Job;
