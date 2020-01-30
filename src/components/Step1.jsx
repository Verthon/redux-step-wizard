import React from "react";
import Stats from "./Stats";

const Step1 = props => {
  return (
    <div className="columns container">
      <div className="column is-one-fifth">
      <h1>Form number one</h1>
      <form className="control" action="">
        <label htmlFor="">Name</label>
        <input className="input" type="text" />
        <label htmlFor="">Surname</label>
        <input className="input" type="text" />
      </form>
      </div>
      
    </div>
  );
};

export default Step1;
