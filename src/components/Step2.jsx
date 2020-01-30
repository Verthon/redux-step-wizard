import React from "react";
import Stats from "./Stats";

const Step2 = props => {
  return (
    <div className="columns container">
      <div className="column is-one-fifth">
        <form className="control" action="">
          <h1>Form number Two</h1>
          <label htmlFor="">City</label>
          <input className="input" type="text" />
          <label htmlFor="">Country</label>
          <input className="input" type="text" />
        </form>
      </div>
    </div>
  );
};

export default Step2;
