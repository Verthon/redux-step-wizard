import React from "react";
import { store, stepSlice } from "../slices/stepSlice";
import { useSelector, connect } from "react-redux";
import styles from "../styles.css";

const StepWizard = ({
  isLazyMount,
  children,
  activeStep,
  increment,
  decrement,
  nav
}) => {
  console.log("increment in Wizard");
  const goToNextStep = () => {
    let currentStep = activeStep;
    if (isInvalidStep(currentStep)) {
      console.error(`${currentStep + 1} is an invalid step`);
      return;
    }
    currentStep = increment();
    return currentStep;
  };

  const isInvalidStep = next => next < 0 || next >= children.length;

  const goToPreviousStep = () => {
    let currentStep = activeStep;
    if (isInvalidStep(activeStep)) {
      console.error(`${activeStep + 1} is an invalid step`);
      return;
    }
    currentStep = decrement();
    return currentStep;
  };
  const previousStep = () => goToPreviousStep();
  const nextStep = () => goToNextStep();

  const isReactComponent = ({ type }) => {
    //console.log("isReactComponent fired", type);
    return typeof type === "function" || typeof type === "object";
  };

  const childrenWithProps = React.Children.map(children, (child, i) => {
    const settings = {
      currentStep: activeStep,
      totalSteps: children.length,
      /** Functions */
      nextStep: nextStep,
      previousStep: previousStep
      // goToStep: goToStep,
      // firstStep: firstStep,
      // lastStep: lastStep
    };
    settings.isActive = i === store.getState();
    //props.transitions = classes[i];
    // Not Lazy Mount || isLazyMount && isActive
    if (!isLazyMount || (isLazyMount && settings.isActive)) {
      return (
        <>
          <Step {...settings}>
            {isReactComponent(child)
              ? React.cloneElement(child, settings)
              : child}
          </Step>
          <h2>StepWizard component buttons</h2>
          <button className="button is-light" onClick={settings.previousStep}>
            Previous Step
          </button>
          <button className="button is-light" onClick={settings.nextStep}>
            Next Step
          </button>
        </>
      );
    }

    return null;
  });
  return (
    <div className="test">
      {/* {nav && React.cloneElement(nav, settings)} */}
      <div className={styles["step-wrapper"]}>{childrenWithProps}</div>
    </div>
  );
};

export const Step = ({ children, isActive, transitions }) => (
  <div
    className={`${styles.step} ${transitions} ${
      isActive ? styles.active : ""
    }`.trim()}
  >
    {children}
  </div>
);

const mapStateToProps = state => ({
  activeStep: state
});
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(stepSlice.actions.increment()),
  decrement: () => dispatch(stepSlice.actions.decrement())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepWizard);
