import React from "react";
import "./About.css"; // Assuming you have the CSS file for styling

const About = ({ description, complexity, implementationCode }) => {
  return (
    <div className="about-container">
      <div className="info-parent">
        <div className="sort-description">
          <div className="section-title">DESCRIPTION</div>
          <div className="description-text">{description}</div>
        </div>
        <div className="table-box">
          <div className="section-title">COMPLEXITY</div>
          <table className="sort-table">
            <tbody>
              <tr>
                <th>Average Complexity</th>
                <td>{complexity.average}</td>
              </tr>
              <tr>
                <th>Best Case</th>
                <td>{complexity.best}</td>
              </tr>
              <tr>
                <th>Worst Case</th>
                <td>{complexity.worst}</td>
              </tr>
              <tr>
                <th>Space Complexity</th>
                <td>{complexity.space}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="code-container">
        <div className="code-title">Implementation</div>
        <code className="code">{implementationCode}</code>
      </div>
    </div>
  );
};

export default About;