import React from 'react';
import { Section, Card, Button } from '../../components';

class InfoSection extends React.Component {

  render() {
    let sectionClass = `icg-info ${this.props.className}`;
    let naics = {

    };
    let aos = {
      type : "fade-up",
      duration: 1500
    };

    return (
      <Section id="aboutInfo" className={sectionClass}>
        <h2 className="centered" data-aos="fade-in">Business Classifications</h2>

        <div className="card-container centered">

          <div className="mdl-grid ">
            <div className="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">

              <Card aos={aos} className="centered mdl-shadow--3dp full-width">

                <ul className="list">
                  <li className="row">
                    <div className="label">DUNS Number</div>
                    <div className="data">080061738</div>
                  </li>
                  <li className="row">
                    <div className="label">CAGE Code</div>
                    <div className="data">—</div>
                  </li>
                </ul>

                <p className="centered">
                  The North American Industy Classification System (NAICS) is the standard used by Federal statistical agencies in clasifying business establishments for the purpose of collecting, analyzing, and publishing statistical data related to the U.S. business economy.
                </p>

                <p className="centered">
                  The NAICS Codes under which ICG is registered to do business are as follows:
                </p>

                <ul className="list">
                  <li className="row">
                    <div className="label">73729901</div>
                    <div className="data">Application computer software</div>
                  </li>
                  <li className="row">
                    <div className="label">73740102</div>
                    <div className="data">Computer graphics service</div>
                  </li>
                  <li className="row">
                    <div className="label">73710000, 73710100</div>
                    <div className="data">Custom computer programming services</div>
                  </li>

                  <li className="row">
                    <div className="label">541511</div>
                    <div className="data">Custom Computer Programming Services</div>
                  </li>
                  <li className="row">
                    <div className="label">511210</div>
                    <div className="data">Software Publishers</div>
                  </li>
                  <li className="row">
                    <div className="label">518210</div>
                    <div className="data">Data Processing,Hosting, and Related Services</div>
                  </li>
                  <li className="row">
                    <div className="label">611420</div>
                    <div className="data">Computer Training</div>
                  </li>
                  <li className="row">
                    <div className="label">82439903</div>
                    <div className="data">Software training, computer</div>
                  </li>
                </ul>

              </Card>

            </div>
          </div>

        </div>

      </Section>
    );
  }

}

export default InfoSection;
