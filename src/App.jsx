import React, { useState } from "react";
import "./App.css";
import StepWizard from "./components/StepWizard";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import { store, stepSlice } from "./slices/stepSlice";

function App() {
  const [form, setForm] = useState({});

  const updateForm = (key, value) => {
    const { form } = this.state;
    form[key] = value;
    setForm({ ...form, [key]: value });
  };

  return (
    <>
    <StepWizard isHashEnabled isLazyMount store={store} stepSlice={stepSlice}>
      <Step1 />
      <Step2 />
      <Step3 />
    </StepWizard>
    <h2>App component buttons</h2>
    <button class="button is-dark" onClick={() => store.dispatch(stepSlice.actions.decrement())}>Previous Step</button>
    <button class="button is-dark" onClick={() => store.dispatch(stepSlice.actions.increment())}>Next Step</button>
    </>
  );
}

export default App;
