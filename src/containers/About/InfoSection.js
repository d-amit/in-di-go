import React from 'react';
import { Section, Card, Button } from '../../components';

const InfoSection = ({ className }) => {

    let sectionClass = `icg-info ${className}`;

    let aos = {
      type : "fade-up",
      duration: 1500
    };

    // TODO - externalize the naics codes
    let naics = [
      { id: '73729901', name: 'Application Computer Software' },
      { id: '73740102', name: 'Computer Graphics Service' },
      { id: '73710000', name: 'Custom Computer Programming Services' },
      { id: '73710100', name: 'Custom Computer Programming Services' },
      { id: '541511', name: 'Custom Computer Programming Services' },
      { id: '511210', name: 'Software Publishers' },
      { id: '518210', name: 'Data Processing,Hosting, and Related Services' },
      { id: '611420', name: 'Computer Training' },
      { id: '82439903', name: 'Software Training, Computer' }
    ];

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
                  {naics.map((code, i) => {
                    return (
                      <li key={'code' + i} className="row">
                        <div className="label">{code.id}</div>
                        <div className="data">{code.name}</div>
                      </li>
                    );
                  })}
                </ul>

              </Card>

            </div>
          </div>

        </div>

      </Section>
    );

}

export default InfoSection;
