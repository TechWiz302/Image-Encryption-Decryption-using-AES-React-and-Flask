import React from 'react'
import "./Features.css"
import { featureDetails } from "../../data/constant";

const Features = () => {
  return (
    <div id='features' className="features section_padding">
      <div className="row">
        {featureDetails.map((feature, index) => (
          <div className="col-xl-3 col-md-6 col-12" key={index}>
            <div className="feature">
              <div className="feature-icon text-center pb-3">
                <img className="feature-img" src={feature.image} alt={feature.title}/>
              </div>
              <div className="feature-content text-center justify-content-center">
                <h3>{feature.title}</h3>
                <p>{feature.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features