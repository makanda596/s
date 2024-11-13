import React, { useState } from 'react';
import Home from './Home';
import Gift from './Gift';
import Dinner from './Dinner';
import Proposal from './Proposal';

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);

  return (
    <div>
      {step === 1 && <Home nextStep={nextStep} />}
      {step === 2 && <Gift nextStep={nextStep} />}
      {step === 3 && <Dinner nextStep={nextStep} />}
      {step === 4 && <Proposal />}
    </div>
  );
}

export default App;
