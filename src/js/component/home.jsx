import propTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

//create your first component
function SimpleCounter(props) {
  return (
    <div className=" bigCounter">
      <div className="calendar">
        <FontAwesomeIcon icon={faClock} style={{color: "#ffffff",}} />
      </div>
      <div className="four">
        {props.digitFour % 10}
      </div>
      <div className="three">
        {props.digitThree % 10}
      </div>
      <div className="two">
        {props.digitTwo % 10}
      </div>
      <div className="one">
        {props.digitOne % 10}
      </div>
    </div>
  );
};


SimpleCounter.propTypes = {
  digitFour: propTypes.number,
  digitThree: propTypes.number,
  digitTwo: propTypes.number,
  digitOne: propTypes.number,
};

let counter = 0;

setInterval(function () {
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100);
  const two = Math.floor(counter / 10);
  const one = Math.floor(counter / 1);
  counter++;

  ReactDOM.render(
    <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />,
    document.querySelector("#app")
  );
}, 1000);

export default SimpleCounter;
