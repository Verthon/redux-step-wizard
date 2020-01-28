import React, {useState} from 'react';
import './App.css';
import Wizard from './components/Wizard';
function App() {
  const [form, setForm] = useState({

  })

  const updateForm = (key, value) => {
    const { form } = this.state;

    form[key] = value;
    setForm({ ...form, [key]: value });
  }

  return (
    <Wizard/>
  );
}

export default App;
