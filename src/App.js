// import thing from ./place.jsx
import DisplayBoxes from './displayBoxes.jsx';
import BoxesForm from './boxesForm.jsx';
import { useState } from 'react';

function App() {
  const [boxes, setBoxes] = useState(['red', 'blue', 'green']);
  const addColor = (newColor) => {
    setBoxes([...boxes, newColor]);
  };
  return (
    <div className="container">
      <BoxesForm boxes={boxes} addColor={addColor} />
      <DisplayBoxes boxes={boxes} />
    </div>
  );
}

export default App;
