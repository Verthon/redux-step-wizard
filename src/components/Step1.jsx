import React from "react";
import Stats from "./Stats";

const Step1 = props => {
  return (
    <div class="columns container">
      <div className="column is-one-fifth">
      <h1>Form number one</h1>
      <form class="control" action="">
        <label htmlFor="">Name</label>
        <input class="input" type="text" />
        <label htmlFor="">Surname</label>
        <input  class="input" type="text" />
      </form>
      </div>
      
    </div>
  );
};

export default Step1;
