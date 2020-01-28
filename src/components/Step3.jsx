import React from 'react';
import Stats from './Stats';

const Step3 = (props) => {
  return (
    <div class="columns container">
      <div className="column is-one-fifth">
        <form class="control" action="">
          <h1>Form number Three</h1>
          <label htmlFor="">Phone number</label>
          <input class="input" type="tel" />
          <label htmlFor="">Email</label>
          <input class="input" type="email" />
        </form>
      </div>
    </div>
  );
};

export default Step3;