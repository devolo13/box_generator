import React from 'react';
import { useState } from 'react';

const BoxesForm = (props) => {
  const [color, setColor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addColor(color);
  };
  return (
    <form className="d-flex align-items-center justify-content-center" onSubmit={handleSubmit}>
      <p className="m-2">Color</p>
      <input type="text" className="m-2 form-control" name="color" value={color} onChange={(e) => setColor(e.target.value)}/>
      <button className="btn btn-secondary m-2" type="submit">Add</button>
    </form>
  );
};

export default BoxesForm;
