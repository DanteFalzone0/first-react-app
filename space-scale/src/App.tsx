import React, { useState } from 'react';
import './style.css';

function App() {
  const [ weight, setWeight ] = useState(0);
  const [ world, setWorld ] = useState("Earth");
  const [ units, setUnits ] = useState("kg");

  return (
    <div>
      <p className="title_bar"> Space Weight Calculator </p>
      <p> Made by Dante Falzone with React.js </p>
      Input what you weigh on Earth:&nbsp;
      <input id="weight" defaultValue={0} onChange={w => setWeight(parseFloat(w.target.value))}/>
      <select id="units" value={units} onChange={u => setUnits(u.target.value)}>
        <option value="kg">kg</option>
        <option value="lbs">lbs</option>
      </select>
      <br/>
      <label htmlFor="world-selection">Choose a world: </label>
      <select id="world-selection" value={world} onChange={w => setWorld(w.target.value)}>
        <option value="Earth">Earth</option>
        <option value="the Moon">The Moon</option>
        <option value="Mars">Mars</option>
      </select>
      <br/>
      Your weight on {world} would be {calculateWeight(weight, world)} {units}.
    </div>
  );
}

function calculateWeight(earthWeight: number, world: string): number {
  switch (world) {
    case "Earth":
      return earthWeight;
    case "the Moon":
      return earthWeight * 0.166;
    case "Mars":
      return earthWeight * 0.376;
    default:
      return NaN;
  }
}

export default App;
