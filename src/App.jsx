import React from "react";
import { useSelector, connect } from "react-redux";
import StepWizard from "./components/StepWizard";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import { stepSlice } from "./slices/stepSlice";
import "./styles.css";

const App = ({ activeStep, increment, decrement }) => {
  const isInvalidStep = next => next < 0 || next >= 3;
  const switchStep = type => {
    console.log("active Step in App", activeStep);
    if (isInvalidStep(activeStep)) {
      console.log("Invalid step", activeStep);
      return;
    }
    switch (type) {
      case "decrement":
        return decrement();
      case "increment":
        return increment();
      default:
        return;
    }
  };
  return (
    <>
      <StepWizard
        isLazyMount
        activeStep={activeStep}
        decrement={decrement}
        increment={increment}
      >
        <Step1 />
        <Step2 />
        <Step3 />
      </StepWizard>
      <h2>App component buttons</h2>
      <button
        className="button is-dark"
        onClick={() => switchStep("decrement")}
      >
        Previous Step
      </button>
      <button
        className="button is-dark"
        onClick={() => switchStep("increment")}
      >
        Next Step
      </button>
    </>
  );
};

const mapStateToProps = state => ({
  activeStep: state
});
const mapDispatchToProps = dispatch => ({
  increment: step => dispatch(stepSlice.actions.increment()),
  decrement: id => dispatch(stepSlice.actions.decrement())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
