import React, { useState } from "react";
import './Counter.css';

const Counter = ({level_count, gold_count, cost_count, setLevelCount, setGoldCount, setCostCount}) => {
  

  const handleIncrementLevel = () => {setLevelCount(level_count + 1);};
  const handleDecrementLevel = () => {setLevelCount(level_count - 1);};
  const handleIncrementGold = () => {setGoldCount(gold_count + 1);};
  const handleDecrementGold = () => {setGoldCount(gold_count - 1);};
  const handleIncrementCost = () => {setCostCount(cost_count + 1);};
  const handleDecrementCost = () => {setCostCount(cost_count - 1);};

  return (
      <div className='splitgrid-into3'>
        <div>
          <button onClick={handleIncrementLevel}>Lvl_up</button>
          <p>{level_count}</p>
          <button onClick={handleDecrementLevel}>Lvl_down</button>
        </div>
        <div>
          <button onClick={handleIncrementGold}>Gold_up</button>
          <p>{gold_count}</p>
          <button onClick={handleDecrementGold}>Gold_down</button>
        </div>
        <div>
          <button onClick={handleIncrementCost}>Champ_cost_up</button>
          <p>{cost_count}</p>
          <button onClick={handleDecrementCost}>Champ_cost_down</button>
        </div>
      </div>
  );
};
export default Counter;
