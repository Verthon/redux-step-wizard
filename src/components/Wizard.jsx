import React, { Component } from "react";
import StepWizard from "./StepWizard";
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Nav from './Nav';

class Wizard extends Component {
  render() {
    return (
      <StepWizard nav={<Nav />} isHashEnabled isLazyMount>
        <Step1 />
        <Step2 />
        <Step3 />
      </StepWizard>
    );
  }
}

export default Wizard;
