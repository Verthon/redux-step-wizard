import React from "react";
import Stats from "./Stats";

const Step2 = props => {
  return (
    <div class="columns container">
      <div className="column is-one-fifth">
        <form class="control" action="">
          <h1>Form number Two</h1>
          <label htmlFor="">City</label>
          <input class="input" type="text" />
          <label htmlFor="">Country</label>
          <input class="input" type="text" />
        </form>
      </div>
    </div>
  );
};

export default Step2;
