import React from 'react';
import './Card.css';
import design from '../images/picture.jpeg';
import amazon from '../images/amazonlogo.jpeg';

export default function card(){
  return (
    <>
    <div className="card-container">
      <div className="card-details">
        <div className="details-header">
          <h3>Don't worry.<br></br> We are here for <br></br> every solution.</h3>
          <p className="detail-para">
            Bushwick meh Blue Bottle pork belly mustache skateboard 3 wolf moon. Actually beard single-origin cofe, twee 90's PBR Echo Park.
          </p>
          <div className="btn-section">
            <button className="started">Get Started</button>
            <button className="watch"><i class="fas fa-play-circle"></i>Watch Video</button>
          </div>
        </div>
        <div className="detail-footer">
          <button className="btn-footer">Intergrations</button>
          <img src={amazon} alt="amazon-logo" className="amazon"/>
          <button className="northern">Northern*</button>
          <button className="northern">Google</button>
          <button className="skrill">Skrill</button>
        </div>
      </div>

      <div className="design-img">
        <img src={design} alt="design" />
      </div>
    </div>
    </>
  )
}